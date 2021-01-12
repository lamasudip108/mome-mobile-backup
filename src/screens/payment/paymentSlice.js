import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {update} from '@/utils/httpUtil';


export const payAmount = createAsyncThunk(
    'payment/payAmount',
     (formData, {rejectWithValue}) => {
        const {id, ...fields} = formData;
        return update(`api/transactions/${id}`, fields).then(response => response.data.data).catch(error => rejectWithValue(error?.response?.data || error));
    },
);

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {entities: {}, loading: false, error: null},
    reducers: {
    },
    extraReducers: {
        [payAmount.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [payAmount.fulfilled]: (state, action) => {
            state.loading = false;
            state.entities = action.payload;
            state.error = null;
        },
        [payAmount.rejected]: (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.error = action.payload.error.message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export default paymentSlice.reducer;
