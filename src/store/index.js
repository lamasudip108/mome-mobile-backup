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

import authReducer from '@/screens/auth/authSlice';
import profileReducer from '@/screens/profile/profileSlice';
import passwordReducer from '@/screens/setting/passwordSlice';
import paymentReducer from '@/screens/payment/paymentSlice';
import transactionReducer from '@/screens/transaction/transactionSlice';

import banksReducer from '@/screens/bank/banksSlice';
import customerBankReducer from '@/screens/bank/customerBankSlice';
import customerBanksReducer from '@/screens/bank/customerBanksSlice';

import walletReducer from '@/screens/wallet/walletSlice';
import contactsReducer from '@/screens/wallet/contactsSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
};

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    password: passwordReducer,
    payment: paymentReducer,
    transactions: transactionReducer,
    banks: banksReducer,
    customerBank: customerBankReducer,
    customerBanks: customerBanksReducer,
    wallets: walletReducer,
    contacts: contactsReducer,
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
