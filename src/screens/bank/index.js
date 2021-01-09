import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyBanksForm from './components';
import {bankServices} from './duck';

const MyBanksScreen = (props) => {

    const dispatch = useDispatch();

    const {banks, loading, errors} = useSelector(state => state.banks);

    useEffect(() => {
       // dispatch(bankServices.fetchCustomerBankByIdentifier());
    }, [dispatch]);

    return (
        <MyBanksForm
            {...props}
        />
    );

};

export default MyBanksScreen;
