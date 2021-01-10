import {update} from '@/utils/httpUtil';
import ToastMessage from '@/shared/toast';

import {
    customerPasswordUpdateRequest,
    customerPasswordUpdateRequestSuccess,
    customerPasswordUpdateRequestFailure,
} from './actions';


export const updateCustomerPassword = (identifier, formData = {}) => {
    return (dispatch) => {
        dispatch(customerPasswordUpdateRequest());
        return update(`api/customers/${identifier}`, formData)
            .then((response) => {
                if (response.data.success) {
                    dispatch(customerPasswordUpdateRequestSuccess(response.data));
                    ToastMessage.show('Your current password has been successfully changed.');
                }
            })
            .catch((error) =>
                dispatch(customerPasswordUpdateRequestFailure(error.response.data)),
            );
    };
};
