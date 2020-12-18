import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SignInForm from './components/SignIn';
import {customerServices} from './duck';

const SignInScreen = (props) => {

    const dispatch = useDispatch();

    const {payload, loading, errors} = useSelector(state => state.auth);

    /**
     * Customer sign in.
     * @param {object} formData
     *
     */
    const customerSignin = formData => {
        dispatch(customerServices.customerSignin(formData));
    };

    return (
        <SignInForm
            {...props}
            auths={payload}
            authLoading={loading}
            authErrors={errors}
            customerSignin={customerSignin}
        />
    );
};

export default SignInScreen;
