import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch} from '@/utils/httpUtil';

export const fetchAllBanks = createAsyncThunk(
    'bank/fetchAll',
    (_, {rejectWithValue}) => {
        return fetch(`api/banks`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const bankSlice = createSlice({
    name: 'bank',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {},
    extraReducers: {
        [fetchAllBanks.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchAllBanks.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchAllBanks.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export default bankSlice.reducer;
