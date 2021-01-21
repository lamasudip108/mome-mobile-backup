import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SendAmount from './components/SendAmount';

const SendAmountScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <SendAmount
            {...props}
        />
    );

};

export default SendAmountScreen;
