import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RequestingOptions from './components/RequestingOptions';

const RequestingOptionsScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <RequestingOptions
            {...props}
        />
    );

};

export default RequestingOptionsScreen;