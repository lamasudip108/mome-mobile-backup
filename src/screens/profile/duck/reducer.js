import {
    CUSTOMER_PROFILE_FETCH_REQUEST,
    CUSTOMER_PROFILE_FETCH_REQUEST_SUCCESS,
    CUSTOMER_PROFILE_FETCH_REQUEST_FAILURE,
    CUSTOMER_PROFILE_UPDATE_REQUEST,
    CUSTOMER_PROFILE_UPDATE_REQUEST_SUCCESS,
    CUSTOMER_PROFILE_UPDATE_REQUEST_FAILURE,
    CUSTOMER_PROFILE_CLEAN_REQUEST,
} from './types';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const reducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case CUSTOMER_PROFILE_FETCH_REQUEST:
        case CUSTOMER_PROFILE_UPDATE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case CUSTOMER_PROFILE_FETCH_REQUEST_SUCCESS:
        case CUSTOMER_PROFILE_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case CUSTOMER_PROFILE_FETCH_REQUEST_FAILURE:
        case CUSTOMER_PROFILE_UPDATE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case CUSTOMER_PROFILE_CLEAN_REQUEST:
            return Object.assign({}, state, {
                loading: false,
                payload: [],
                errors: {},
            });

        default:
            return state;
    }
};

export default reducer;
