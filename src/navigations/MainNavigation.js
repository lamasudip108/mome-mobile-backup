import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LanguageScreen from '@/screens/language';
import HomeScreen from '@/screens/home';

const Stack = createStackNavigator();

const MainNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="Language" headerMode={'none'}>
            <Stack.Screen name="Language" component={LanguageScreen} options={{title: 'Select Language'}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
        </Stack.Navigator>
    );
};

export default MainNavigation;
