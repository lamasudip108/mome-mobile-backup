import {
    customerPasswordUpdateRequest,
    customerPasswordUpdateRequestSuccess,
    customerPasswordUpdateRequestFailure,
} from './actions';

import {update} from '@/utils/httpUtil';

export const updateCustomerPassword = (identifier, formData = {}) => {
    return (dispatch) => {
        dispatch(customerPasswordUpdateRequest());
        return update(`api/customers/${identifier}`, formData)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerPasswordUpdateRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerPasswordUpdateRequestFailure(error.response.data)),
            );
    };
};
