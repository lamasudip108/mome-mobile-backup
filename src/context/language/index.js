import React, {useState, createContext, useContext, useEffect, useReducer} from 'react';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import memoize from 'lodash.memoize';
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import {setAsyncStorage, getAsyncStorage} from '@/utils/storageUtil';
import {LANGUAGE_CHANGED} from '@/constants';

import en from '@/translations/en.json';
import ar from '@/translations/ar.json';

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = (langKey) => {
    // fallback if no available language fits
    const fallback = {languageTag: langKey, isRTL: langKey === 'ar'};

    const {languageTag, isRTL} = fallback;

    // clear translation cache
    translate.cache.clear();
    // update layout direction
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = {en, ar};
    i18n.locale = languageTag;
};

export const LanguageContext = createContext({
    direction: I18nManager.isRTL ? 'rtl' : 'ltr',
});

export const LanguageProvider = ({children}) => {

    const [direction, setDirection] = useState(I18nManager.isRTL ? 'rtl' : 'ltr');

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'LANGUAGE_CHANGED':
                    return {
                        ...prevState,
                        isLanguageChanged: action.isLanguageChanged,
                    };
            }
        },
        {isLanguageChanged:false},
    );

    const toggleDirection = (ld) => {
        setDirection(ld);
        I18nManager.forceRTL(ld === 'rtl');

        const setInitialScreen = async () => {
            await setAsyncStorage(LANGUAGE_CHANGED, 'true');
        };
        setInitialScreen();

        RNRestart.Restart();
    };

    useEffect(() => {

        const handleLocalizationChange = () => {
            setI18nConfig(direction === 'ltr' ? 'en' : 'ar');
        };

        RNLocalize.addEventListener('change', handleLocalizationChange());

        return () => {
            RNLocalize.removeEventListener('change', handleLocalizationChange());
        };

    }, []);

    useEffect(() => {
        const bootstrapAsync = async () => {
            let langKey =  await getAsyncStorage(LANGUAGE_CHANGED);
            dispatch({ type: 'LANGUAGE_CHANGED', isLanguageChanged: langKey  });
        };

        bootstrapAsync();

    }, []);

    return (
        <LanguageContext.Provider value={{
            direction,
            toggleDirection,
            state
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useDirection = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('You forgot to implement the language provider.');
    }

    return context;
};
