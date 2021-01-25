import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import History from './components/History';

const HistoryScreen = (props) => {

    const dispatch = useDispatch();

    return (
        <History
            {...props}
        />
    );

};

export default HistoryScreen;
