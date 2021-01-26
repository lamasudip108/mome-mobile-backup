import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import History from './components/History';
import {fetchWalletHistoryByCustomerID, resetWalletHistory} from './walletHistorySlice';

const HistoryScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.walletHistory);

    /**
     * Fetch customer transaction data.
     * @param {string} identifier
     *
     */
    const fetchWalletHistoryByCustomerIdentifier = identifier => {
        dispatch(fetchWalletHistoryByCustomerID(identifier));
    };

    /**
     * Clear customer wallet history data.
     *
     */
    const cleanCustomerWalletHistory = () => {
        dispatch(resetWalletHistory());
    };

    return (
        <History
            {...props}
            walletHistory={entities}
            loading={loading}
            error={error}
            fetchWalletHistoryByCustomerIdentifier={fetchWalletHistoryByCustomerIdentifier}
            cleanCustomerWalletHistory={cleanCustomerWalletHistory}
        />
    );

};

export default HistoryScreen;
