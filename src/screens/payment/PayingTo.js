import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import PayingToForm from './components/PayingTo';
import {paymentServices} from './duck';

const PayingToScreen = (props) => {

    const dispatch = useDispatch();

   // const {payment, loading, errors} = useSelector(state => state.payment);

    // useEffect(() => {
    //     dispatch(paymentServices.payAmount());
    // }, [dispatch]);

    return (
        <PayingToForm
            {...props}
        />
    );

};

export default PayingToScreen;
