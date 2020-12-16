import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LanguageScreen from '@/screens/language';
import SignInScreen from '@/screens/auth/SignIn';
import SignUpScreen from '@/screens/auth/SignUp';
import HomeScreen from '@/screens/home';
import ProfileScreen from '@/screens/profile';

const Stack = createStackNavigator();

const MainNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="Language">
            <Stack.Screen name="Language" component={LanguageScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignInScreen} options={{headerTitle: '', headerTransparent: true}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerTitle: '', headerTransparent: true}}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigation;
