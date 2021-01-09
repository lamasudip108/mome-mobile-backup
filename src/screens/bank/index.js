import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyBanksForm from './components';
import {bankServices} from './duck';

const MyBanksScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    useEffect(() => {
       // dispatch(bankServices.fetchProfileInfo());
    }, [dispatch]);

    return (
        <MyBanksForm
            {...props}
        />
    );

};

export default MyBanksScreen;
