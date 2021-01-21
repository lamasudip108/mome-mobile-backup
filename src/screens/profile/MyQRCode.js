import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyQRCodeForm from './components/MyQRCode';
import {fetchCustomerByID} from './profileSlice';

const MyQRCodeScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.profile);

    /**
     * Fetch customer data.
     * @param {string} identifier
     *
     */
    const fetchCustomerByIdentifier = identifier => {
        dispatch(fetchCustomerByID(identifier));
    };

    return (
        <MyQRCodeForm
            {...props}
            {...props}
            profile={entities}
            loading={loading}
            error={error}
            fetchCustomerByIdentifier={fetchCustomerByIdentifier}
        />
    );

};

export default MyQRCodeScreen;
