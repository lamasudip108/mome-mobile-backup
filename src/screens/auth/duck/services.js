import {
    customerSigninRequest,
    customerSigninRequestSuccess,
    customerSigninRequestFailure,
} from './actions';

import {store} from '@/utils/httpUtil';

export const customerSignin = (formData = {}) => {
    return (dispatch) => {
        dispatch(customerSigninRequest());
        return store(`api/auths/login`, formData)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerSigninRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerSigninRequestFailure(error.response.data)),
            );
    };
};
