import React from 'react';
import {useDispatch} from 'react-redux';

import SignUpForm from './components/SignUp';

const SignUpScreen = (props) => {

    const dispatch = useDispatch();

    return (
        <SignUpForm
            {...props}
        />
    );
};

export default SignUpScreen;
