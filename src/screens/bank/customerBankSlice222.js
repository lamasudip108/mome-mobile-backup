import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch, store} from '@/utils/httpUtil';

export const fetchBankByCustomerID = createAsyncThunk(
    'customerBank/fetchByCustomerID',
    (identifier, {rejectWithValue}) => {
        return fetch(`api/customers/${identifier}/banks`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

export const AddBankByCustomerID = createAsyncThunk(
    'customerBank/addByCustomerID',
     (formData, {rejectWithValue}) => {
        const {id, ...fields} = formData;
        return store(`api/customers/${id}/banks`, fields).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const customerBankSlice = createSlice({
    name: 'customerBank',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
        resetCustomerBank: (state) => {
            state.entities = {};
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [fetchBankByCustomerID.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchBankByCustomerID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchBankByCustomerID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
        [AddBankByCustomerID.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [AddBankByCustomerID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
        },
        [AddBankByCustomerID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const {resetCustomerBank} = customerBankSlice.actions;
export default customerBankSlice.reducer;
