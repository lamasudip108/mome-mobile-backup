import axios from 'axios';

import {API_URL, JWT_TOKEN, LANGUAGE_KEY} from '@/constants';
import {getAsyncStorage, setAsyncStorage, clearAsyncStorage} from '@/storageUtil';

export const httpBase = () => {
    const headers = {
        'X-XSRF-TOKEN': getAsyncStorage(JWT_TOKEN),
        Lang: getAsyncStorage(LANGUAGE_KEY) ? getAsyncStorage(LANGUAGE_KEY) : 'en',
    };

    const normalHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const api = axios.create({
        baseURL: `${API_URL}`,
        headers: {...headers, ...normalHeaders},
        responseType: 'json',
    });

    api.interceptors.response.use(
        (response) => {
            if (response.headers && response.headers['x-xsrf-token']) {
                setAsyncStorage(JWT_TOKEN, response.headers['x-xsrf-token']);
            }
            return response;
        },
        (error) => {
            if (401 === error.response.status) {
                clearAsyncStorage(JWT_TOKEN);
            }
            if (404 === error.response.status) {
                // TODO
            }
            if (500 === error.response.status) {
                // TODO
            }
            return Promise.reject(error);
        },
    );

    return api;
};
