import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {fetch, store} from '@/utils/httpUtil';

export const fetchCustomerByID = createAsyncThunk(
    'profile/fetchByID',
     (identifier, { rejectWithValue}) => {
        try {
            const response =  fetch(`api/customers/${identifier}`);
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    },
);

export const updateCustomerByID = createAsyncThunk(
    'profile/updateByID',
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
