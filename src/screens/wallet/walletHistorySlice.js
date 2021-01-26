import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch} from '@/utils/httpUtil';

export const fetchWalletHistoryByCustomerID = createAsyncThunk(
    'walletHistory/fetchByCustomerID',
    (identifier, {rejectWithValue}) => {
        return fetch(`api/wallets/${identifier}`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);


const walletHistorySlice = createSlice({
    name: 'walletHistory',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
        resetWalletHistory: (state) => {
            state.entities = {};
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [fetchWalletHistoryByCustomerID.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchWalletHistoryByCustomerID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchWalletHistoryByCustomerID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const {resetWalletHistory} = walletHistorySlice.actions;
export default walletHistorySlice.reducer;
