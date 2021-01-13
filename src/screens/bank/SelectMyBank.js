import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SelectMyBank from './components/SelectMyBank';
import {fetchBankByCustomerID} from './customerBankSlice';

const SelectMyBankScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.banks);

    /**
     * Fetch customer banks data.
     * @param {string} identifier
     *
     */
    const fetchBankByCustomerIdentifier = (identifier) => {
        dispatch(fetchBankByCustomerID(identifier));
    };

    return (
        <SelectMyBank
            {...props}
            bankOptions={entities}
            loading={loading}
            error={error}
            fetchBankByCustomerIdentifier={fetchBankByCustomerIdentifier}
        />
    );

};

export default SelectMyBankScreen;
