import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SelectBankForm from './components/SelectBank';
import {bankServices} from './duck';

const SelectBankScreen = (props) => {

    const dispatch = useDispatch();

    const {banks, loading, errors} = useSelector(state => state.banks);

    useEffect(() => {
       // dispatch(bankServices.fetchBank());
    }, [dispatch]);

    return (
        <SelectBankForm
            {...props}
        />
    );

};

export default SelectBankScreen;
