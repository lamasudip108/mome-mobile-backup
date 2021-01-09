import {
    bankFetchRequest,
    bankFetchRequestSuccess,
    bankFetchRequestFailure,
    customerBankFetchRequest,
    customerBankFetchRequestSuccess,
    customerBankFetchRequestFailure,
    customerBankAddRequest,
    customerBankAddRequestSuccess,
    customerBankAddRequestFailure,
} from './actions';

import {fetch, store} from '@/utils/httpUtil';

export const fetchBank = () => {
    return (dispatch) => {
        dispatch(bankFetchRequest());
        return fetch(`client/v1/registrations/profile`)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(bankFetchRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(bankFetchRequestFailure(error.response.data)),
            );
    };
};

export const fetchCustomerBankByIdentifier = (identifier) => {
    return (dispatch) => {
        dispatch(customerBankFetchRequest());
        return fetch(`api/customers/${identifier}`)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerBankFetchRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerBankFetchRequestFailure(error.response.data)),
            );
    };
};

export const AddCustomerBank = (formData = {}) => {
    return (dispatch) => {
        dispatch(customerBankAddRequest());
        return store(`api/customers`, formData)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerBankAddRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerBankAddRequestFailure(error.response.data)),
            );
    };
};
