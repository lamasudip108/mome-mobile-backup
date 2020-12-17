import {
    CUSTOMER_SIGNIN_REQUEST,
    CUSTOMER_SIGNIN_REQUEST_SUCCESS,
    CUSTOMER_SIGNIN_REQUEST_FAILURE,
    CUSTOMER_SIGNIN_CLEAN_REQUEST,
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
