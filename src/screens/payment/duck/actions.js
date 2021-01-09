import {
    CUSTOMER_PAID_AMOUNT_REQUEST,
    CUSTOMER_PAID_AMOUNT_REQUEST_SUCCESS,
    CUSTOMER_PAID_AMOUNT_REQUEST_FAILURE,
    CUSTOMER_PAID_AMOUNT_CLEAN_REQUEST,
} from './types';

export const customerPaidAmountRequest = () => {
    return {
        type: CUSTOMER_PAID_AMOUNT_REQUEST,
    };
};

export const customerPaidAmountRequestSuccess = (data) => {
    return {
        type: CUSTOMER_PAID_AMOUNT_REQUEST_SUCCESS,
        data,
    };
};

export const customerPaidAmountRequestFailure = (error) => {
    return {
        type: CUSTOMER_PAID_AMOUNT_REQUEST_FAILURE,
        error,
    };
};

export const customerPaidAmountCleanRequest = () => {
    return {
        type: CUSTOMER_PAID_AMOUNT_CLEAN_REQUEST,
    };
};

