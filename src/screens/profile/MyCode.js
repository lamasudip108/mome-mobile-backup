import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyCodeForm from './components/MyCode';
import {profileServices} from './duck';

const MyCodeScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    useEffect(() => {
       // dispatch(profileServices.fetchProfileInfo());
    }, [dispatch]);

    return (
        <MyCodeForm
            {...props}
        />
    );

};

export default MyCodeScreen;
