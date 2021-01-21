import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ReviewForm from './components/Review';
import {payAmount} from './paymentSlice';

const ReviewScreen = (props) => {

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
        <ReviewForm
            {...props}
            payment={entities}
            loading={loading}
            error={error}
            payBillAmount={payBillAmount}
        />
    );

};

export default ReviewScreen;
