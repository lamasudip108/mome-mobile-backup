import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SelectBankForm from './components/SelectBank';
import {fetchAllBanks} from './bankSlice';

const SelectBankScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.banks);

    /**
     * Fetch banks data.
     *
     */
    const fetchAllBankList = () => {
        dispatch(fetchAllBanks());
    };

    return (
        <SelectBankForm
            {...props}
            bankOptions={entities}
            loading={loading}
            error={error}
            fetchAllBanks={fetchAllBankList}
        />
    );

};

export default SelectBankScreen;
