import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';

import profileReducer from '@/screens/profile/duck';
import authReducer from '@/screens/auth/duck';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
};

const reducers = combineReducers({
    profile: profileReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });

        if (__DEV__ && !process.env.JEST_WORKER_ID) {
            const createDebugger = require('redux-flipper').default;
            middlewares.push(createDebugger());
        }

        return middlewares;
    },
});

const persistor = persistStore(store);

export {store, persistor};
