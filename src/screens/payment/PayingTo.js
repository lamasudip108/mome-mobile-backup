import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import PayingToForm from './components/PayingTo';
import {payAmount} from './paymentSlice';

const PayingToScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.payment);

    /**
     * Pay bill amount.
     * @param {object} formData
     *
     */
    const payBillAmount = formData => {
        dispatch(payAmount(formData));
    };


    return (
        <PayingToForm
            {...props}
            payment={entities}
            loading={loading}
            error={error}
            payBillAmount={payBillAmount}
        />
    );

};

export default PayingToScreen;
