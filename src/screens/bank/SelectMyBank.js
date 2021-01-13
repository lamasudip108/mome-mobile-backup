import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import SelectMyBank from './components/SelectMyBank';
import {fetchBanksByCustomerID} from './customerBanksSlice';

const SelectMyBankScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.customerBanks);

    /**
     * Fetch customer banks data.
     * @param {string} identifier
     *
     */
    const fetchBanksByCustomerIdentifier = (identifier) => {
        dispatch(fetchBanksByCustomerID(identifier));
    };

    return (
        <SelectMyBank
            {...props}
            bankOptions={entities}
            loading={loading}
            error={error}
            fetchBanksByCustomerIdentifier={fetchBanksByCustomerIdentifier}
        />
    );

};

export default SelectMyBankScreen;
