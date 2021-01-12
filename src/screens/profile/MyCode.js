import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import MyCodeForm from './components/MyCode';

const MyCodeScreen = (props) => {

    const dispatch = useDispatch();

    const {entities, loading, error} = useSelector(state => state.profile);

    return (
        <MyCodeForm
            {...props}
        />
    );

};

export default MyCodeScreen;
