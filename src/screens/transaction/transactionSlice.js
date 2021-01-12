import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch} from '@/utils/httpUtil';

export const fetchTransactionByCustomerID = createAsyncThunk(
    'transaction/fetchByCustomerID',
    (identifier, {rejectWithValue}) => {
        return fetch(`api/transactions/${identifier}`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
        resetTransaction: (state) => {
            state.entities = {};
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [fetchTransactionByCustomerID.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchTransactionByCustomerID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchTransactionByCustomerID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const {resetTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;
