import {
    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_REQUEST_SUCCESS,
    PROFILE_FETCH_REQUEST_FAILURE,
    PROFILE_CLEAN_REQUEST,
} from './types';

export const profileFetchRequest = () => {
    return {
        type: PROFILE_FETCH_REQUEST,
    };
};

export const profileFetchRequestSuccess = (data) => {
    return {
        type: PROFILE_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const profileFetchRequestFailure = (error) => {
    return {
        type: PROFILE_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const profileCleanRequest = () => {
    return {
        type: PROFILE_CLEAN_REQUEST,
    };
};

