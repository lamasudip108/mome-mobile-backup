import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {store} from '@/utils/httpUtil';

export const signUpCustomer = createAsyncThunk(
    'auth/signUp',
    (formData, {rejectWithValue}) => {
        return store(`api/customers`, formData).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

export const forgotCustomerPassword = createAsyncThunk(
    'auth/forgot',
    (formData, {rejectWithValue}) => {
        return store(`api/customers/forgot`, formData).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
        resetCustomer: (state) => {
            state.entities = {};
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [signUpCustomer.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [signUpCustomer.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [signUpCustomer.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
        [forgotCustomerPassword.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [forgotCustomerPassword.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
        },
        [forgotCustomerPassword.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const {resetCustomer} = authSlice.actions;
export default authSlice.reducer;
