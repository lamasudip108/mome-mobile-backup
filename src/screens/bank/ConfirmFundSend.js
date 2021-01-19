import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ConfirmFundSend from './components/ConfirmFundSend';

const ConfirmFundSendScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <ConfirmFundSend
            {...props}
        />
    );

};

export default ConfirmFundSendScreen;
