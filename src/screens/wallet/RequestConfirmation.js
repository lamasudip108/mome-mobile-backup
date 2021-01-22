import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RequestConfirmation from './components/RequestConfirmation';
import {requestMoney, resetWallets} from './walletSlice';

const RequestConfirmationScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.wallets);

    /**
     * Request customer[friend] for money data.
     * @param {object} formData
     *
     */
    const requestCustomerForMoney = (formData) => {
        dispatch(requestMoney(formData));
    };

    /**
     * Clear customer wallets data.
     *
     */
    const cleanCustomerWallets = () => {
        dispatch(resetWallets());
    };

    return (
        <RequestConfirmation
            {...props}
            wallets={entities}
            loading={loading}
            error={error}
            requestCustomerForMoney={requestCustomerForMoney}
            cleanCustomerWallets={cleanCustomerWallets}
        />
    );

};

export default RequestConfirmationScreen;
