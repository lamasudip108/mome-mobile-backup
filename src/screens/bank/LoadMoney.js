import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SelectBankForm from './components/SelectBank';

const LoadMoneyScreen = (props) => {

    const dispatch = useDispatch();


    return (
        <LoadMoney
            {...props}
        />
    );

};

export default LoadMoneyScreen;
