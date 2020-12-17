import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigation from '@/navigations/BottomTabNavigation';
import ModelNavigation from '@/navigations/ModelNavigation';

import LanguageScreen from '@/screens/language';
import SignInScreen from '@/screens/auth/SignIn';
import SignUpScreen from '@/screens/auth/SignUp';
import ProfileScreen from '@/screens/profile';

const Stack = createStackNavigator();

const MainNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="Language">
            <Stack.Screen name="Language" component={LanguageScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={BottomTabNavigation} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignInScreen} options={{headerTitle: '', headerTransparent: true}}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerTitle: '', headerTransparent: true}}/>
            <Stack.Screen name="Model" component={ModelNavigation} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigation;
