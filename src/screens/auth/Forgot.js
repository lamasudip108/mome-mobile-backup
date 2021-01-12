import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ForgotForm from './components/Forgot';
import {forgotCustomerPassword} from './authSlice';

const ForgotScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector((state) => state.auth);

    /**
     * Forgot customer password.
     * @param {object} formData
     *
     */
    const forgotPassword = formData => {
        dispatch(forgotCustomerPassword(formData));
    };

    return (
        <ForgotForm
            {...props}
            loading={loading}
            forgotPassword={forgotPassword}
        />
    );
};

export default ForgotScreen;
