import {
    CUSTOMER_SIGNIN_REQUEST,
    CUSTOMER_SIGNIN_REQUEST_SUCCESS,
    CUSTOMER_SIGNIN_REQUEST_FAILURE,
    CUSTOMER_SIGNIN_CLEAN_REQUEST,
    CUSTOMER_SIGNUP_REQUEST,
    CUSTOMER_SIGNUP_REQUEST_SUCCESS,
    CUSTOMER_SIGNUP_REQUEST_FAILURE,
    CUSTOMER_SIGNUP_CLEAN_REQUEST,
} from './types';

export const customerSigninRequest = () => {
    return {
        type: CUSTOMER_SIGNIN_REQUEST,
    };
};

export const customerSigninRequestSuccess = (data) => {
    return {
        type: CUSTOMER_SIGNIN_REQUEST_SUCCESS,
        data,
    };
};

export const customerSigninRequestFailure = (error) => {
    return {
        type: CUSTOMER_SIGNIN_REQUEST_FAILURE,
        error,
    };
};

export const customerSigninCleanRequest = () => {
    return {
        type: CUSTOMER_SIGNIN_CLEAN_REQUEST,
    };
};

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
