import React from 'react';
import {useSelector} from 'react-redux';

import Profile from './components';

const ProfileScreen = (props) => {

    const {entities, loading, error} = useSelector((state) => state.profile);

    return (
        <Profile
            {...props}
            profile={entities}
            loading={loading}
            error={error}
        />
    );

};

export default ProfileScreen;
