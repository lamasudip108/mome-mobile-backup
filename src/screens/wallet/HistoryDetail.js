import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import HistoryDetail from './components/HistoryDetail';

const HistoryDetailScreen = (props) => {

    const dispatch = useDispatch();

    return (
        <HistoryDetail
            {...props}
        />
    );

};

export default HistoryDetailScreen;
