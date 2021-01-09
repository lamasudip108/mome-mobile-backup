import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AddBankForm from './components/AddBank';
import {bankServices} from './duck';

const AddBankScreen = (props) => {

    const dispatch = useDispatch();

    // const {profile, loading, errors} = useSelector(state => state.banks);

    // useEffect(() => {
    //     dispatch(profileServices.fetchProfileInfo());
    // }, [dispatch]);

    return (
        <AddBankForm
            {...props}
        />
    );

};

export default AddBankScreen;
