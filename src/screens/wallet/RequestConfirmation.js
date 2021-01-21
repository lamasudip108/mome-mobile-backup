import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RequestConfirmation from './components/RequestConfirmation';

const RequestConfirmationScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <RequestConfirmation
            {...props}
        />
    );

};

export default RequestConfirmationScreen;
