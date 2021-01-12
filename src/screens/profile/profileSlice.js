import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch, update} from '@/utils/httpUtil';

export const fetchCustomerByID = createAsyncThunk(
    'profile/fetchByID',
    (identifier, {rejectWithValue}) => {
        return fetch(`api/customers/${identifier}`).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

export const updateCustomerByID = createAsyncThunk(
    'profile/updateByID',
     (formData, {rejectWithValue}) => {
        const {id, ...fields} = formData;
        return update(`api/customers/${id}`, fields).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const profileSlice = createSlice({
    name: 'profile',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
        resetProfile: (state) => {
            state.entities = {};
            state.loading = false;
            state.error = null;
        },
    },
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

export const {resetProfile} = profileSlice.actions;
export default profileSlice.reducer;
