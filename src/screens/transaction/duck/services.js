import {
    customerTransactionFetchRequest,
    customerTransactionFetchRequestSuccess,
    customerTransactionFetchRequestFailure,
} from './actions';

import {fetch} from '@/utils/httpUtil';

export const fetchCustomerTransactionByIdentifier = (identifier) => {
    return (dispatch) => {
        dispatch(customerTransactionFetchRequest());
        return fetch(`api/​transactions/${identifier}`)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerTransactionFetchRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerTransactionFetchRequestFailure(error.response.data)),
            );
    };
};
