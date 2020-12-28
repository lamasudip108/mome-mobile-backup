import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from '@/store';
import {MainNavigation} from '@/navigations';
import {navigationRef} from '@/utils/navigationUtil';
import {LanguageDirectionProvider} from '@/context/language';

const App = () => {

    return (<Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <LanguageDirectionProvider>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer ref={navigationRef}>
                    <MainNavigation/>
                </NavigationContainer>
            </PersistGate>
        </LanguageDirectionProvider>
    </Provider>);
};


export default App;
