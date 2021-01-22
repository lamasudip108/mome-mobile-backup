import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import RequestContact from './components/RequestContact';
import {fetchAllContacts} from './contactsSlice';

const RequestContactScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.contacts);

    /**
     * Fetch contacts data.
     *
     */
    const fetchAllContactList = () => {
        dispatch(fetchAllContacts());
    };

    return (
        <RequestContact
            {...props}
            contacts={entities}
            loading={loading}
            error={error}
            fetchAllContacts={fetchAllContactList}
        />
    );

};

export default RequestContactScreen;
