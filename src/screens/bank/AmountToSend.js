import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AmountToSend from './components/AmountToSend';

const AmountToSendScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <AmountToSend
            {...props}
        />
    );

};

export default AmountToSendScreen;
