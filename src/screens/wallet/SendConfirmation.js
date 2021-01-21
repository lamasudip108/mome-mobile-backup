import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SendConfirmation from './components/SendConfirmation';

const SendConfirmationScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <SendConfirmation
            {...props}
        />
    );

};

export default SendConfirmationScreen;
