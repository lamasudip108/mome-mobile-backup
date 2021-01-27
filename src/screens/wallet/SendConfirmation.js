import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SendConfirmation from './components/SendConfirmation';
import {sendMoney, resetWallets} from './walletSlice';

const SendConfirmationScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.wallets);
    const profile = useSelector((state) => state.profile.entities);

    /**
     * Send money to customer[friend] data.
     * @param {object} formData
     *
     */
    const sendMoneyToCustomer = (formData) => {
        dispatch(sendMoney(formData));
    };

    /**
     * Clear customer wallets data.
     *
     */
    const cleanCustomerWallets = () => {
        dispatch(resetWallets());
    };

    return (
        <SendConfirmation
            {...props}
            profile={profile}
            wallets={entities}
            loading={loading}
            error={error}
            sendMoneyToCustomer={sendMoneyToCustomer}
            cleanCustomerWallets={cleanCustomerWallets}
        />
    );

};

export default SendConfirmationScreen;
