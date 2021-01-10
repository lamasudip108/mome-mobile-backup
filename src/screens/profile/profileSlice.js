import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch, store} from '@/utils/httpUtil';

export const fetchCustomerByID = createAsyncThunk(
    'profile/fetchByID',
    async (identifier, {rejectWithValue}) => {
        try {
            const response = await fetch(`api/customers/${identifier}`);
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    },
);

export const updateCustomer = createAsyncThunk(
    'profile/update',
    async (formData, {rejectWithValue}) => {
        const {id, ...fields} = formData;
        try {
            const response = await store(`api/customers/${id}`, fields);
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    },
);

const profileSlice = createSlice({
    name: 'profile',
    initialState: {entities: [], loading: false, error: null},
    reducers: {},
    extraReducers: {
        [fetchCustomerByID.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCustomerByID.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities.push(action.payload);
        },
        [fetchCustomerByID.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error;
            } else {
                state.error = action.error;
            }
        },
        [updateCustomer.pending]: (state, action) => {
            state.loading = true;
        },
        [updateCustomer.fullfilled]: (state, action) => {
            state.loading = false;
            const user = action.payload;
            state.entities[user.id] = user;
        },
        [updateCustomer.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error;
            } else {
                state.error = action.error;
            }
        },
    },
});

export default profileSlice.reducer
