import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ChangePasswordForm from './components/ChangePassword';
import {passwordServices} from './duck';

const ChangePasswordScreen = (props) => {

    const dispatch = useDispatch();

    const {password, loading, errors} = useSelector(state => state.password);

    useEffect(() => {
       // dispatch(passwordServices.updateCustomerPassword());
    }, [dispatch]);

    return (
        <ChangePasswordForm
            {...props}
        />
    );

};

export default ChangePasswordScreen;
