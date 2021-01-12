import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch, store} from '@/utils/httpUtil';

export const fetchCustomerByID = createAsyncThunk(
    'profile/fetchByID',
    (identifier) => {
        return fetch(`api/customers/${identifier}`).then(response => response.data.data).catch(error => error.response.data);

    },
);

export const updateCustomerByID = createAsyncThunk(
    'profile/updateByID',
    async (formData) => {
        const {id, ...fields} = formData;
        return store(`api/customers/${id}`, fields).then(response => response.data.data).catch(error => error.response.data);
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
            console.log('PPPP::::', action);
            state.loading = true;
            state.error = null;
        },
        [fetchCustomerByID.fulfilled]: (state, action) => {
            console.log('FFFF::::', action);
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [fetchCustomerByID.rejected]: (state, action) => {
            console.log('RRRRRR::::', action.payload);
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
            console.log("action.payload", action.payload);
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
