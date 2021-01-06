import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {Root as NativeBaseProvider} from 'native-base';

import {store, persistor} from '@/store';
import {MainNavigation} from '@/navigations';
import {navigationRef} from '@/utils/navigationUtil';
import {LanguageProvider} from '@/context/language';
import {AuthProvider} from '@/context/auth';
import SplashScreen from '@/screens/splash';

// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
//     GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

const App = () => {

    return (<Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <LanguageProvider>
            <PersistGate loading={<SplashScreen/>} persistor={persistor}>
                <NativeBaseProvider>
                    <AuthProvider>
                        <NavigationContainer ref={navigationRef}>
                            <MainNavigation/>
                        </NavigationContainer>
                    </AuthProvider>
                </NativeBaseProvider>
            </PersistGate>
        </LanguageProvider>
    </Provider>);
};


export default App;
