import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import EditProfileForm from './components/EditProfile';
import {fetchCustomerByID, updateCustomer} from './profileSlice';

const EditProfileFormScreen = (props) => {

    const dispatch = useDispatch();

    const { profile, loading, error } = useSelector((state) => state.profile);

    /**
     * Fetch customer data.
     * @param {string} identifier
     *
     */
    const fetchCustomerByIdentifier = identifier => {
        dispatch(fetchCustomerByID(identifier));
    };

    /**
     * Update customer data.
     * @param {object} formData
     *
     */
    const updateCustomer = formData => {
        dispatch(updateCustomer(formData));
    };

    return (
        <EditProfileForm
            {...props}
            profile={profile}
            loading={loading}
            error={error}
            fetchCustomerByIdentifier={fetchCustomerByIdentifier}
            updateCustomer={updateCustomer}
        />
    );

};

export default EditProfileFormScreen;
