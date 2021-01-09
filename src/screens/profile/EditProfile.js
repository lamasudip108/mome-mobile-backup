import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import EditProfileForm from './components/EditProfile';
import {profileServices} from './duck';

const EditProfileFormScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    // useEffect(() => {
    //     dispatch(profileServices.fetchProfileInfo());
    // }, [dispatch]);

    return (
        <EditProfileForm
            {...props}
        />
    );

};

export default EditProfileFormScreen;
