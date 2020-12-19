import {navigate} from '@/utils/navigationUtil';

import {
    customerSigninRequest,
    customerSigninRequestSuccess,
    customerSigninRequestFailure,
    customerSignupRequest,
    customerSignupRequestSuccess,
    customerSignupRequestFailure,
} from './actions';

import {store} from '@/utils/httpUtil';
import {setAsyncStorage} from '@/utils/storageUtil';
import {JWT_TOKEN} from '@/constants';

export const customerSignin = (formData = {}) => {
    return (dispatch) => {
        dispatch(customerSigninRequest());
        return store(`api/auths/login`, formData)
            .then((response) => {
                if (response.data.success) {
                    dispatch(customerSigninRequestSuccess(response.data));
                    setAsyncStorage(JWT_TOKEN, response.data.token);
                    navigate('Home');
                }
            })
            .catch((error) =>
                dispatch(customerSigninRequestFailure(error.response.data)),
            );
    };
};

export const customerSignup = (formData = {}) => {
    return (dispatch) => {
        dispatch(customerSignupRequest());
        return store(`api/customers`, formData)
            .then((response) => {
                if (response.data.success) {
                    dispatch(customerSignupRequestSuccess(response.data));
                    navigate('SignIn');
                }
            })
            .catch((error) =>
                dispatch(customerSignupRequestFailure(error.response.data)),
            );
    };
};
