import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Profile from './components';
import {profileServices} from './duck';

const ProfileScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    // useEffect(() => {
    //     dispatch(profileServices.fetchProfileInfo());
    // }, [dispatch]);

    return (
        <Profile
            {...props}
        />
    );

};

export default ProfileScreen;
