import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SendContact from './components/SendContact';
import {fetchAllContacts} from './contactsSlice';

const SendContactScreen = (props) => {

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
        <SendContact
            {...props}
            contacts={entities}
            loading={loading}
            error={error}
            fetchAllContacts={fetchAllContactList}
        />
    );

};

export default SendContactScreen;
