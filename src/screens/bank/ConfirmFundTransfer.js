import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ConfirmFundTransfer from './components/ConfirmFundTransfer';

const ConfirmFundTransferScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <ConfirmFundTransfer
            {...props}
        />
    );

};

export default ConfirmFundTransferScreen;
