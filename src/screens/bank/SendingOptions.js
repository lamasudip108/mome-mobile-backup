import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SendingOptions from './components/SendingOptions';

const SendingOptionsScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <SendingOptions
            {...props}
        />
    );

};

export default SendingOptionsScreen;