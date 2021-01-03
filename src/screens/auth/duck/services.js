import {navigate} from '@/utils/navigationUtil';
import ToastMessage from '@/shared/toast';
import {store} from '@/utils/httpUtil';

import {
    customerSignupRequest,
    customerSignupRequestSuccess,
    customerSignupRequestFailure,
} from './actions';

export const customerSignUp = (formData = {}) => {
    return (dispatch) => {
        dispatch(customerSignupRequest());
        return store(`api/customers`, formData)
            .then((response) => {
                if (response.data.success) {
                    dispatch(customerSignupRequestSuccess(response.data));
                    navigate('SignIn');
                    ToastMessage.show('Your account has been successfully created. We\'ve sent you verification link to your email account. Please check your email inbox and verify your email address.');
                }
            })
            .catch((error) =>
                dispatch(customerSignupRequestFailure(error.response.data)),
            );
    };
};
