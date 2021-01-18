import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch} from '@/utils/httpUtil';

export const fetchBanksByCustomerID = createAsyncThunk(
    'customerBanks/fetchByCustomerID',
    (identifier, {rejectWithValue}) => {
        return fetch(`api/customers/${identifier}/banks`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const customerBanksSlice = createSlice({
    name: 'customerBanks',
    initialState: {entities: [], loading: false, error: null},
    reducers: {
        resetCustomerBanks: (state) => {
            state.entities = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [fetchBanksByCustomerID.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchBanksByCustomerID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchBanksByCustomerID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const {resetCustomerBanks} = customerBanksSlice.actions;
export default customerBanksSlice.reducer;
