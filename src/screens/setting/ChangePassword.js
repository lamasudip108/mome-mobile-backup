import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ChangePasswordForm from './components/ChangePassword';
import {updateCustomerByID, resetCustomerPassword} from './passwordSlice';

const ChangePasswordScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector((state) => state.password);

    /**
     * Update customer data.
     * @param {object} formData
     *
     */
    const updateCustomer = formData => {
        dispatch(updateCustomerByID(formData));
    };

    /**
     * Clear customer data.
     *
     */
    const cleanCustomerPassword = () => {
        dispatch(resetCustomerPassword());
    };

    return (
        <ChangePasswordForm
            {...props}
            {...props}
            password={entities}
            loading={loading}
            error={error}
            updateCustomer={updateCustomer}
            cleanCustomerPassword={cleanCustomerPassword}
        />
    );

};

export default ChangePasswordScreen;
