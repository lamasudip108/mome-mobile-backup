import {
    profileFetchRequest,
    profileFetchRequestSuccess,
    profileFetchRequestFailure,
} from './actions';

import {fetch} from '@/utils/httpUtil';

export const fetchProfileInfo = () => {
    return (dispatch) => {
        dispatch(profileFetchRequest());
        return fetch(`client/v1/registrations/profile`)
            .then((response) => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(profileFetchRequestSuccess(response.data.data));
                }
            })
            .catch((error) =>
                dispatch(profileFetchRequestFailure(error.response.data)),
            );
    };
};
