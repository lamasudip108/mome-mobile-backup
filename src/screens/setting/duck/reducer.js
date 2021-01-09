import {
    CUSTOMER_PASSWORD_UPDATE_REQUEST,
    CUSTOMER_PASSWORD_UPDATE_REQUEST_SUCCESS,
    CUSTOMER_PASSWORD_UPDATE_REQUEST_FAILURE,
    CUSTOMER_PASSWORD_CLEAN_REQUEST,
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
        case CUSTOMER_PASSWORD_UPDATE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case CUSTOMER_PASSWORD_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case CUSTOMER_PASSWORD_UPDATE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case CUSTOMER_PASSWORD_CLEAN_REQUEST:
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
