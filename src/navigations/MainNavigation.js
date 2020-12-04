import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LanguageScreen from '@/screens/language';
import SignInScreen from '@/screens/auth';
import HomeScreen from '@/screens/home';
import ProfileScreen from '@/screens/profile';

const Stack = createStackNavigator();

const MainNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="Language" headerMode={'none'}>
            <Stack.Screen name="Language" component={LanguageScreen} options={{title: 'Select Language'}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignInScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigation;
