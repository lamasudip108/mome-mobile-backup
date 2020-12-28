import {
    CUSTOMER_SIGNUP_REQUEST,
    CUSTOMER_SIGNUP_REQUEST_SUCCESS,
    CUSTOMER_SIGNUP_REQUEST_FAILURE,
    CUSTOMER_SIGNUP_CLEAN_REQUEST,
} from './types';

export const customerSignupRequest = () => {
    return {
        type: CUSTOMER_SIGNUP_REQUEST,
    };
};

export const customerSignupRequestSuccess = (data) => {
    return {
        type: CUSTOMER_SIGNUP_REQUEST_SUCCESS,
        data,
    };
};

export const customerSignupRequestFailure = (error) => {
    return {
        type: CUSTOMER_SIGNUP_REQUEST_FAILURE,
        error,
    };
};

export const customerSignupCleanRequest = () => {
    return {
        type: CUSTOMER_SIGNUP_CLEAN_REQUEST,
    };
};
