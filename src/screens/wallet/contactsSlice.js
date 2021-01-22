import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch} from '@/utils/httpUtil';

export const fetchAllContacts = createAsyncThunk(
    'contacts/fetchAll',
    (_, {rejectWithValue}) => {
        return fetch(`api/customers`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {entities: [], loading: false, error: null},
    reducers: {},
    extraReducers: {
        [fetchAllContacts.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchAllContacts.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchAllContacts.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export default contactsSlice.reducer;
