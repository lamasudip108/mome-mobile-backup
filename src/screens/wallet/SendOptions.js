import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SendOptions from './components/SendOptions';

const SendOptionsScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <SendOptions
            {...props}
        />
    );

};

export default SendOptionsScreen;
