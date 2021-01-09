import {
    BANK_FETCH_REQUEST,
    BANK_FETCH_REQUEST_SUCCESS,
    BANK_FETCH_REQUEST_FAILURE,
    BANK_CLEAN_REQUEST,
    CUSTOMER_BANK_FETCH_REQUEST,
    CUSTOMER_BANK_FETCH_REQUEST_SUCCESS,
    CUSTOMER_BANK_FETCH_REQUEST_FAILURE,
    CUSTOMER_BANK_ADD_REQUEST,
    CUSTOMER_BANK_ADD_REQUEST_SUCCESS,
    CUSTOMER_BANK_ADD_REQUEST_FAILURE,
    CUSTOMER_BANK_CLEAN_REQUEST,
} from './types';

export const bankFetchRequest = () => {
    return {
        type: BANK_FETCH_REQUEST,
    };
};

export const bankFetchRequestSuccess = (data) => {
    return {
        type: BANK_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const bankFetchRequestFailure = (error) => {
    return {
        type: BANK_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const bankCleanRequest = () => {
    return {
        type: BANK_CLEAN_REQUEST,
    };
};

export const customerBankFetchRequest = () => {
    return {
        type: CUSTOMER_BANK_FETCH_REQUEST,
    };
};

export const customerBankFetchRequestSuccess = (data) => {
    return {
        type: CUSTOMER_BANK_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const customerBankFetchRequestFailure = (error) => {
    return {
        type: CUSTOMER_BANK_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const customerBankAddRequest = () => {
    return {
        type: CUSTOMER_BANK_ADD_REQUEST,
    };
};

export const customerBankAddRequestSuccess = (data) => {
    return {
        type: CUSTOMER_BANK_ADD_REQUEST_SUCCESS,
        data,
    };
};

export const customerBankAddRequestFailure = (error) => {
    return {
        type: CUSTOMER_BANK_ADD_REQUEST_FAILURE,
        error,
    };
};

export const customerBankCleanRequest = () => {
    return {
        type: CUSTOMER_BANK_CLEAN_REQUEST,
    };
};

