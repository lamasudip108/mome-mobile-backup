import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyBanksForm from './components';
import {fetchBankByCustomerID, resetCustomerBank} from './customerBankSlice';

const MyBanksScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.customerBanks);

    /**
     * Fetch customer banks data.
     *
     */
    const fetchBankByCustomerIdentifier = (identifier) => {
        dispatch(fetchBankByCustomerID(identifier));
    };

    /**
     * Clear customer bank data.
     *
     */
    const cleanCustomerBank = () => {
        dispatch(resetCustomerBank());
    };

    return (
        <MyBanksForm
            {...props}
            banks={entities}
            loading={loading}
            error={error}
            fetchBankByCustomerIdentifier={fetchBankByCustomerIdentifier}
            cleanCustomerBank={cleanCustomerBank}
        />
    );

};

export default MyBanksScreen;
