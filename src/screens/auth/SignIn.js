import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SignInForm from './components/SignIn';
import {customerServices} from './duck';

const SignInScreen = (props) => {

    const dispatch = useDispatch();

    const {auth, loading, errors} = useSelector(state => state.auth);

    /**
     * Add branch record.
     * @param {object} formData
     *
     */
    const customerSignin = formData => {
        dispatch(customerServices.customerSignin(formData));
    };

    return (
        <SignInForm
            {...props}
            customerSignin={this.customerSignin}
        />
    );
};

export default SignInScreen;
