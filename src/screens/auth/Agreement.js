import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AgreementForm from './components/Agreement';
import {customerServices, customerActions} from './duck';

const AgreementScreen = (props) => {

    const dispatch = useDispatch();

    const {payload, loading, errors} = useSelector(state => state.auth);

    /**
     * Customer sign up.
     * @param {object} formData
     *
     */
    const customerSignUp = formData => {
        dispatch(customerServices.customerSignUp(formData));
    };

    /**
     * Clean customer sign up record.
     *
     */
    const cleanCustomerSignUp = () => {
        dispatch(customerActions.customerSignupCleanRequest());
    };

    return (
        <AgreementForm
            {...props}
            auths={payload}
            authLoading={loading}
            authErrors={errors}
            customerSignUp={customerSignUp}
            cleanCustomerSignUp={cleanCustomerSignUp}
        />
    );
};

export default AgreementScreen;
