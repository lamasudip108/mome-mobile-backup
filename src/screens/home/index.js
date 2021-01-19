import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Home from './components';
import {fetchCustomerByID} from './profileSlice';

const HomeScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector((state) => state.profile);

    /**
     * Fetch customer data.
     * @param {string} identifier
     *
     */
    const fetchCustomerByIdentifier = identifier => {
        dispatch(fetchCustomerByID(identifier));
    };

    return (
        <Home
            {...props}
            profile={entities}
            loading={loading}
            error={error}
            fetchCustomerByIdentifier={fetchCustomerByIdentifier}
        />
    );
};

export default HomeScreen;
