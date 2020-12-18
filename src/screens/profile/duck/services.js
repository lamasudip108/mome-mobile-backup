import {
    customerProfileFetchRequest,
    customerProfileFetchRequestSuccess,
    customerProfileFetchRequestFailure,
} from './actions';

import {fetch} from '@/utils/httpUtil';

export const fetchProfileInfo = () => {
    return (dispatch) => {
        dispatch(customerProfileFetchRequest());
        return fetch(`client/v1/registrations/profile`)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(customerProfileFetchRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(customerProfileFetchRequestFailure(error.response.data)),
            );
    };
};
