import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ConfirmFundRequest from './components/ConfirmFundRequest';

const ConfirmFundRequestScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <ConfirmFundRequest
            {...props}
        />
    );

};

export default ConfirmFundRequestScreen;
