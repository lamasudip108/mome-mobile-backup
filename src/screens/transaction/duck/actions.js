import {
    CUSTOMER_TRANSACTION_FETCH_REQUEST,
    CUSTOMER_TRANSACTION_FETCH_REQUEST_SUCCESS,
    CUSTOMER_TRANSACTION_FETCH_REQUEST_FAILURE,
    CUSTOMER_TRANSACTION_CLEAN_REQUEST,
} from './types';

export const customerTransactionFetchRequest = () => {
    return {
        type: CUSTOMER_TRANSACTION_FETCH_REQUEST,
    };
};

export const customerTransactionFetchRequestSuccess = (data) => {
    return {
        type: CUSTOMER_TRANSACTION_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const customerTransactionFetchRequestFailure = (error) => {
    return {
        type: CUSTOMER_TRANSACTION_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const customerTransactionCleanRequest = () => {
    return {
        type: CUSTOMER_TRANSACTION_CLEAN_REQUEST,
    };
};

