import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView} from 'react-native';

import {store, persistor} from '@/store';
import TestScreen from './App';

const App = () => (
    <>
        <Provider store={store}>
            {/**
             * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
             * and saved to redux.
             * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
             * for example `loading={<SplashScreen />}`.
             * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
             */}
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaView>
                    <TestScreen/>
                </SafeAreaView>
            </PersistGate>
        </Provider>
    </>
);

export default App;
