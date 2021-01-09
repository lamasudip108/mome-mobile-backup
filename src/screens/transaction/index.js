import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Transaction from './components';
import {transactionServices} from './duck';

const TransactionScreen = (props) => {

    const dispatch = useDispatch();

    const {transactions, loading, errors} = useSelector(state => state.transactions);

    useEffect(() => {
        dispatch(transactionServices.fetchCustomerTransactionByIdentifier());
    }, [dispatch]);

    return (
        <Transaction
            {...props}
        />
    );

};

export default TransactionScreen;
