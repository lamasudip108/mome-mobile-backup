import {
    CUSTOMER_PROFILE_FETCH_REQUEST,
    CUSTOMER_PROFILE_FETCH_REQUEST_SUCCESS,
    CUSTOMER_PROFILE_FETCH_REQUEST_FAILURE,
    CUSTOMER_PROFILE_UPDATE_REQUEST,
    CUSTOMER_PROFILE_UPDATE_REQUEST_SUCCESS,
    CUSTOMER_PROFILE_UPDATE_REQUEST_FAILURE,
    CUSTOMER_PROFILE_CLEAN_REQUEST,
} from './types';

export const customerProfileFetchRequest = () => {
    return {
        type: CUSTOMER_PROFILE_FETCH_REQUEST,
    };
};

export const customerProfileFetchRequestSuccess = (data) => {
    return {
        type: CUSTOMER_PROFILE_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const customerProfileFetchRequestFailure = (error) => {
    return {
        type: CUSTOMER_PROFILE_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const customerProfileUpdateRequest = () => {
    return {
        type: CUSTOMER_PROFILE_UPDATE_REQUEST,
    };
};

export const customerProfileUpdateRequestSuccess = (data) => {
    return {
        type: CUSTOMER_PROFILE_UPDATE_REQUEST_SUCCESS,
        data,
    };
};

export const customerProfileUpdateRequestFailure = (error) => {
    return {
        type: CUSTOMER_PROFILE_UPDATE_REQUEST_FAILURE,
        error,
    };
};

export const customerProfileCleanRequest = () => {
    return {
        type: CUSTOMER_PROFILE_CLEAN_REQUEST,
    };
};

