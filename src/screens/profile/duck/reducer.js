import {
    PROFILE_FETCH_REQUEST,
    PROFILE_FETCH_REQUEST_SUCCESS,
    PROFILE_FETCH_REQUEST_FAILURE,
    PROFILE_CLEAN_REQUEST,
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
        case PROFILE_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case PROFILE_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case PROFILE_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case PROFILE_CLEAN_REQUEST:
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