import {
    customerPaidAmountRequest,
    customerPaidAmountRequestSuccess,
    customerPaidAmountRequestFailure,
} from './actions';

import {store} from '@/utils/httpUtil';

export const payAmount = (identifier, formData = {}) => {
    return (dispatch) => {
        dispatch(customerPaidAmountRequest());
        return store(`api/customers/${identifier}`, formData)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerPaidAmountRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerPaidAmountRequestFailure(error.response.data)),
            );
    };
};

