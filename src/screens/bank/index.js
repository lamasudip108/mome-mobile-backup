import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyBank from './components';
import {fetchBankByCustomerID, resetCustomerBank} from './customerBankSlice';

const MyBankScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.customerBanks);

    /**
     * Fetch customer banks data.
     * @param {string} identifier
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
        <MyBank
            {...props}
            banks={entities}
            loading={loading}
            error={error}
            fetchBankByCustomerIdentifier={fetchBankByCustomerIdentifier}
            cleanCustomerBank={cleanCustomerBank}
        />
    );

};

export default MyBankScreen;
