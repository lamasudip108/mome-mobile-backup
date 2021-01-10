import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import EditProfileForm from './components/EditProfile';
import {profileServices} from './duck';

const EditProfileFormScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    /**
     * Fetch profile data.
     * @param {string} identifier
     *
     */
    const fetchCustomerProfileByIdentifier = identifier => {
        dispatch(profileServices.fetchCustomerProfileByIdentifier(identifier));
    };

    return (
        <EditProfileForm
            {...props}
            fetchCustomerProfileByIdentifier={fetchCustomerProfileByIdentifier}
        />
    );

};

export default EditProfileFormScreen;
