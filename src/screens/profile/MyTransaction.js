import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyTransactionForm from './components/MyTransaction';
import {profileServices} from './duck';

const MyTransactionScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(profileServices.fetchProfileInfo());
    }, [dispatch]);

    return (
        <MyTransactionForm
            {...props}
        />
    );

};

export default MyTransactionScreen;
