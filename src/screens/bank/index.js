import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyBank from './components';
import {fetchBanksByCustomerID, resetCustomerBanks} from './customerBanksSlice';

const MyBankScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.customerBanks);

    /**
     * Fetch customer banks data.
     * @param {string} identifier
     *
     */
    const fetchBanksByCustomerIdentifier = (identifier) => {
        dispatch(fetchBanksByCustomerID(identifier));
    };

    /**
     * Clear customer banks data.
     *
     */
    const cleanCustomerBanks = () => {
        dispatch(resetCustomerBanks());
    };

    return (
        <MyBank
            {...props}
            banks={entities}
            loading={loading}
            error={error}
            fetchBanksByCustomerIdentifier={fetchBanksByCustomerIdentifier}
            cleanCustomerBanks={cleanCustomerBanks}
        />
    );

};

export default MyBankScreen;
