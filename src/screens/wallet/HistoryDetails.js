import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import HistoryDetails from './components/HistoryDetails';

const HistoryDetailsScreen = (props) => {

    const dispatch = useDispatch();

    return (
        <HistoryDetails
            {...props}
        />
    );

};

export default HistoryDetailsScreen;
