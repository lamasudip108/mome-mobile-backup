import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {store} from '@/utils/httpUtil';

export const updateCustomerByID = createAsyncThunk(
    'password/updateByID',
     (formData, {rejectWithValue}) => {
        const {id, ...fields} = formData;
        return store(`api/customers/${id}/updatePassword`, fields).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const passwordSlice = createSlice({
    name: 'password',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
        resetCustomerPassword: (state) => {
            state.entities = {};
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        [updateCustomerByID.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [updateCustomerByID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
        },
        [updateCustomerByID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const {resetCustomerPassword} = passwordSlice.actions;

export default passwordSlice.reducer;
