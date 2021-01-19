import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AmountToRequest from './components/AmountToRequest';

const AmountToRequestScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <AmountToRequest
            {...props}
        />
    );

};

export default AmountToRequestScreen;
