import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch, update} from '@/utils/httpUtil';

export const fetchCustomerByID = createAsyncThunk(
    'profile/fetchByID',
    (identifier, {rejectWithValue}) => {
        return fetch(`api/customers/${identifier}`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const profileSlice = createSlice({
    name: 'profile',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {},
    extraReducers: {
        [fetchCustomerByID.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchCustomerByID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchCustomerByID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export default profileSlice.reducer;
