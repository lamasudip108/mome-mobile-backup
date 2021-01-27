import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import AddBankForm from './components/AddBank';
import {AddBankByCustomerID, resetCustomerBank} from './customerBankSlice';

const AddBankScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.customerBanks);
    const profile = useSelector((state) => state.profile.entities);

    /**
     * Fetch customer banks data.
     * @param {string} identifier
     *
     */
    const addBankByCustomerIdentifier = (identifier) => {
        dispatch(AddBankByCustomerID(identifier));
    };

    /**
     * Clear customer bank data.
     *
     */
    const cleanCustomerBank = () => {
        dispatch(resetCustomerBank());
    };

    return (
        <AddBankForm
            {...props}
            profile={profile}
            banks={entities}
            loading={loading}
            error={error}
            addBankByCustomerIdentifier={addBankByCustomerIdentifier}
            cleanCustomerBank={cleanCustomerBank}
        />
    );

};

export default AddBankScreen;
