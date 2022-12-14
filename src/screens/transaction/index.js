import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Transaction from './components';
import {fetchTransactionByCustomerID, resetTransaction} from './transactionSlice';

const TransactionScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.transactions);
    const profile = useSelector((state) => state.profile.entities);


    /**
     * Fetch customer transaction data.
     * @param {string} identifier
     *
     */
    const fetchTransactionByCustomerIdentifier = identifier => {
        dispatch(fetchTransactionByCustomerID(identifier));
    };

    /**
     * Clear customer transaction data.
     *
     */
    const cleanCustomerTransaction = () => {
        dispatch(resetTransaction());
    };

    return (
        <Transaction
            {...props}
            profile={profile}
            transactions={entities}
            loading={loading}
            error={error}
            fetchTransactionByCustomerIdentifier={fetchTransactionByCustomerIdentifier}
            cleanCustomerTransaction={cleanCustomerTransaction}
        />
    );

};

export default TransactionScreen;
