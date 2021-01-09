import {
    CUSTOMER_PASSWORD_UPDATE_REQUEST,
    CUSTOMER_PASSWORD_UPDATE_REQUEST_SUCCESS,
    CUSTOMER_PASSWORD_UPDATE_REQUEST_FAILURE,
    CUSTOMER_PASSWORD_CLEAN_REQUEST,
} from './types';

export const customerPasswordUpdateRequest = () => {
    return {
        type: CUSTOMER_PASSWORD_UPDATE_REQUEST,
    };
};

export const customerPasswordUpdateRequestSuccess = (data) => {
    return {
        type: CUSTOMER_PASSWORD_UPDATE_REQUEST_SUCCESS,
        data,
    };
};

export const customerPasswordUpdateRequestFailure = (error) => {
    return {
        type: CUSTOMER_PASSWORD_UPDATE_REQUEST_FAILURE,
        error,
    };
};

export const customerPasswordCleanRequest = () => {
    return {
        type: CUSTOMER_PASSWORD_CLEAN_REQUEST,
    };
};

