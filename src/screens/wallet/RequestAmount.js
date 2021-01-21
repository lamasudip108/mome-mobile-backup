import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RequestAmount from './components/RequestAmount';

const RequestAmountScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <RequestAmount
            {...props}
        />
    );

};

export default RequestAmountScreen;
