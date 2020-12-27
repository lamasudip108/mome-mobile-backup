import React from 'react';
import {
    createStackNavigator,
    HeaderBackButton,
    TransitionPresets,
} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import BottomTabNavigation from '@/navigations/BottomTabNavigation';
import ModelNavigation from '@/navigations/ModelNavigation';

import LanguageScreen from '@/screens/language';
import SignInScreen from '@/screens/auth/SignIn';
import SignUpScreen from '@/screens/auth/SignUp';
import MyTransactionScreen from '@/screens/profile/MyTransaction';
import ContactUsScreen from '@/screens/static/ContactUs';

const Stack = createStackNavigator();

const MainNavigation = () => {

    const isHeaderShown = (route) => {
        // If the focused route is not found, we need to assume it's the initial screen
        // This can happen during if there hasn't been any navigation inside the screen
        // In our case, it's "Home" as that's the first screen inside the navigator
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
        switch (routeName) {
            case 'Home':
                return false;
            default:
                return true;
        }
    };

    const headerTitle = (route) => {
        // If the focused route is not found, we need to assume it's the initial screen
        // This can happen during if there hasn't been any navigation inside the screen
        // In our case, it's "Home" as that's the first screen inside the navigator
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
        switch (routeName) {
            case 'Home':
                return '';
            case 'Profile':
                return 'My Profile';
            case 'Setting':
                return 'My Settings';
            default:
                return '';
        }
    };

    return (
        <Stack.Navigator initialRouteName="Language">
            <Stack.Screen name="SignIn" component={SignInScreen} options={({route, navigation}) => ({
                headerTitle: '',
                headerTransparent: true,
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => {
                            navigation.replace('Language');
                        }}
                    />),
                ...TransitionPresets.SlideFromRightIOS,
                gestureDirection: 'horizontal-inverted',
            })}/>

            <Stack.Screen name="Language" component={LanguageScreen} options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
                gestureDirection: 'horizontal-inverted',
            }}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{
                headerTitle: '',
                headerTransparent: true,
                ...TransitionPresets.SlideFromRightIOS,
                gestureDirection: 'horizontal-inverted',
            }}/>
            <Stack.Screen name="Model" component={ModelNavigation} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={BottomTabNavigation} options={({route, navigation}) => ({
                headerShown: isHeaderShown(route),
                headerTitleStyle: {alignSelf: 'center'},
                headerTitle: headerTitle(route),
                headerTransparent: true,
                headerLeft: (props) => (
                    <HeaderBackButton
                        {...props}
                        onPress={() => {
                            navigation.replace('Home');
                        }}
                    />
                ),
                ...TransitionPresets.SlideFromRightIOS,
                gestureDirection: 'horizontal-inverted',
            })}/>
            <Stack.Screen name="MyTransaction" component={MyTransactionScreen}
                          options={{
                              title: 'All Transactions',
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="ContactUs" component={ContactUsScreen}
                          options={{
                              title: 'Contact Us',
                              headerTintColor: '#fff',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
        </Stack.Navigator>
    );
};

export default MainNavigation;
