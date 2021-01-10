import {fetch, store} from '@/utils/httpUtil';
import ToastMessage from '@/shared/toast'

import {
    customerProfileFetchRequest,
    customerProfileFetchRequestSuccess,
    customerProfileFetchRequestFailure,
    customerProfileUpdateRequest,
    customerProfileUpdateRequestSuccess,
    customerProfileUpdateRequestFailure,
} from './actions';

export const fetchCustomerProfileByIdentifier = (identifier) => {
    return (dispatch) => {
        dispatch(customerProfileFetchRequest());
        return fetch(`api/customers/${identifier}`)
            .then((response) => {
                if (response.data.success) {
                    dispatch(customerProfileFetchRequestSuccess(response.data));
                }
            })
            .catch((error) =>
                dispatch(customerProfileFetchRequestFailure(error.response.data)),
            );
    };
};

export const updateCustomerProfile = (identifier, formData = {}) => {
    return (dispatch) => {
        dispatch(customerProfileUpdateRequest());
        return store(`api/customers/${identifier}`, formData)
            .then((response) => {
                if (response.data.success) {
                    dispatch(customerProfileUpdateRequestSuccess(response.data));
                    ToastMessage.show('Your information has been successfully updated.');
                }
            })
            .catch((error) =>
                dispatch(customerProfileUpdateRequestFailure(error.response.data)),
            );
    };
};

