import {
    customerProfileFetchRequest,
    customerProfileFetchRequestSuccess,
    customerProfileFetchRequestFailure,
    customerProfileUpdateRequest,
    customerProfileUpdateRequestSuccess,
    customerProfileUpdateRequestFailure,
} from './actions';

import {fetch, store} from '@/utils/httpUtil';

export const fetchCustomerProfileByIdentifier = (identifier) => {
    return (dispatch) => {
        dispatch(customerProfileFetchRequest());
        return fetch(`api/customers/${identifier}`)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerProfileFetchRequestSuccess(response.data.data));
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
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerProfileUpdateRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerProfileUpdateRequestFailure(error.response.data)),
            );
    };
};

