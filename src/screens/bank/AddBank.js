import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AddBankForm from './components/AddBank';
import {bankServices} from './duck';

const AddBankScreen = (props) => {

    const dispatch = useDispatch();

    // const {banks, loading, errors} = useSelector(state => state.banks);

    // useEffect(() => {
    //     dispatch(profileServices.AddCustomerBank());
    // }, [dispatch]);

    return (
        <AddBankForm
            {...props}
        />
    );

};

export default AddBankScreen;
