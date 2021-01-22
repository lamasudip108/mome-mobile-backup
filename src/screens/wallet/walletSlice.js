import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {store} from '@/utils/httpUtil';

export const requestMoney = createAsyncThunk(
    'wallet/requestMoney',
    (formData, {rejectWithValue}) => {
        const {id, ...fields} = formData;
        return store(`api/customers/${id}/request-money`, fields).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

export const sendMoney = createAsyncThunk(
    'wallet/sendMoney',
    (formData, {rejectWithValue}) => {
        const {id, ...fields} = formData;
        return store(`api/customers/${id}/send-money`, fields).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);


const walletSlice = createSlice({
    name: 'wallet',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
        resetWallets: (state) => {
            state.entities = {};
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [requestMoney.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [requestMoney.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [requestMoney.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
        [sendMoney.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [sendMoney.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [sendMoney.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const {resetWallets} = walletSlice.actions;
export default walletSlice.reducer;
