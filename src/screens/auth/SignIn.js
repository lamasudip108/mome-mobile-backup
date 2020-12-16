import React from 'react';
import {useDispatch} from 'react-redux';

import SignInForm from './components/SignIn';

const SignInScreen = (props) => {

    const dispatch = useDispatch();

    return (
        <SignInForm
            {...props}
        />
    );
};

export default SignInScreen;
