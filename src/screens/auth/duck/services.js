import {navigate} from '@/utils/navigationUtil';

import {
    customerSignupRequest,
    customerSignupRequestSuccess,
    customerSignupRequestFailure,
} from './actions';

import {store} from '@/utils/httpUtil';

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
