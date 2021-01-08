import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ProfileForm from './components/ProfileForm';
import {profileServices} from './duck';

const ProfileFormScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    // useEffect(() => {
    //     dispatch(profileServices.fetchProfileInfo());
    // }, [dispatch]);

    return (
        <ProfileForm
            {...props}
        />
    );

};

export default ProfileFormScreen;
