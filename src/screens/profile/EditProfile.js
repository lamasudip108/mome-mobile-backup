import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import EditProfileForm from './components/EditProfile';
import {fetchCustomerByID, updateCustomerByID, resetProfile} from './profileSlice';

const EditProfileFormScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector((state) => state.profile);

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
        dispatch(updateCustomerByID(formData));
    };

    /**
     * Clear customer data.
     *
     */
    const cleanCustomer = () => {
        dispatch(resetProfile());
    };

    return (
        <EditProfileForm
            {...props}
            profile={entities}
            loading={loading}
            error={error}
            fetchCustomerByIdentifier={fetchCustomerByIdentifier}
            updateCustomer={updateCustomer}
            cleanCustomer={cleanCustomer}
        />
    );

};

export default EditProfileFormScreen;
