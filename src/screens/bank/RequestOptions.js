import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import RequestOptions from './components/RequestOptions';

const RequestOptionsScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <RequestOptions
            {...props}
        />
    );

};

export default RequestOptionsScreen;
