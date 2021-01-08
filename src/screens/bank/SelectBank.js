import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SelectBankForm from './components/SelectBank';
import {profileServices} from './duck';

const SelectBankScreen = (props) => {

    const dispatch = useDispatch();

    const {profile, loading, errors} = useSelector(state => state.profile);

    useEffect(() => {
        dispatch(profileServices.fetchProfileInfo());
    }, [dispatch]);

    return (
        <SelectBankForm
            {...props}
        />
    );

};

export default SelectBankScreen;
