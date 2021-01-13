import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import LoadMoney from './components/LoadMoney';

const LoadMoneyScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <LoadMoney
            {...props}
        />
    );

};

export default LoadMoneyScreen;
