import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AgreementForm from './components/Agreement';
import {customerServices} from './duck';

const AgreementScreen = (props) => {

    const dispatch = useDispatch();

    const {payload, loading, errors} = useSelector(state => state.auth);

    /**
     * Customer sign up.
     * @param {object} formData
     *
     */
    const customerSignup = formData => {
        dispatch(customerServices.customerSignup(formData));
    };

    return (
        <AgreementForm
            {...props}
            auths={payload}
            authLoading={loading}
            authErrors={errors}
            customerSignup={customerSignup}
        />
    );
};

export default AgreementScreen;
