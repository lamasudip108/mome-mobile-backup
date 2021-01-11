import axios from 'axios';
import {I18nManager} from 'react-native';

import {API_URL, JWT_TOKEN} from '@/constants';
import {getAsyncStorage, setAsyncStorage, clearAsyncStorage} from './storageUtil';

export const httpBase = () => {

    const api = axios.create({
        baseURL: `${API_URL}`,
        responseType: 'json',
    });

    api.interceptors.request.use(
        async (config) => {
            let token = await getAsyncStorage(JWT_TOKEN);
            config.headers.authorization = `Bearer ${token}`;
            config.headers.lang = I18nManager.isRTL ? 'ar' : 'en';
            config.headers['Accept'] = 'application/json';
            config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => Promise.reject(error),
    );

    api.interceptors.response.use(
        async (response) => {
            if (response.headers && response.headers['x-xsrf-token']) {
                await setAsyncStorage(JWT_TOKEN, response.headers['x-xsrf-token']);
            }
            return response;
        },
        async (error) => {
            if (401 === error.response.status) {
                await clearAsyncStorage(JWT_TOKEN);
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
