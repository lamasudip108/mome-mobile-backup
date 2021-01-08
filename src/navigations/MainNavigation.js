import React from 'react';
import {
    createStackNavigator,
    HeaderBackButton,
    TransitionPresets,
} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import BottomTabNavigation from '@/navigations/BottomTabNavigation';
import ModelNavigation from '@/navigations/ModelNavigation';

import LanguageSplashScreen from '@/screens/language/LanguageSplash';
import LanguageScreen from '@/screens/language';

import SignInScreen from '@/screens/auth/SignIn';
import SignUpScreen from '@/screens/auth/SignUp';

import EditProfileScreen from '@/screens/profile/EditProfile';
import MyTransactionScreen from '@/screens/profile/MyTransaction';
import MyCodeScreen from '@/screens/profile/MyCode';

import MyBanksScreen from '@/screens/bank';
import AddBankScreen from '@/screens/bank/AddBank';
import SelectBankScreen from '@/screens/bank/SelectBank';

import ContactUsScreen from '@/screens/static/ContactUs';
import HowItWorksScreen from '@/screens/static/HowItWorks';
import TermsConditionsScreen from '@/screens/static/TermsConditions';

import ChangePasswordScreen from '@/screens/setting/ChangePassword';

import PayingToScreen from '@/screens/home/PayingTo';
import PayingSuccessScreen from '@/screens/home/PayingSuccess';

import {useDirection} from '@/context/language';

const Stack = createStackNavigator();

const MainNavigation = () => {

    const {state: {isLanguageChanged}} = useDirection();

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
                return 'Profile';
            case 'Setting':
                return '';
            default:
                return '';
        }
    };

    const headerTintColor = (route) => {
        // If the focused route is not found, we need to assume it's the initial screen
        // This can happen during if there hasn't been any navigation inside the screen
        // In our case, it's "Home" as that's the first screen inside the navigator
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
        switch (routeName) {
            case 'Home':
                return '#000';
            case 'Profile':
                return '#fff';
            case 'Setting':
                return '#000';
            case 'MyBanks':
                return '#000';
            default:
                return '#000';
        }
    };


    return (
        <Stack.Navigator screenOptions={({route}) => ({
            headerTitleAlign: 'center',
            headerTintColor: headerTintColor(route),
        })}>
            {isLanguageChanged === null ? (
                <Stack.Screen name="Language" component={LanguageScreen} options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS,
                    gestureDirection: 'horizontal-inverted',
                }}/>

            ) : (
                <>
                    <Stack.Screen name="LanguageSplashScreen" component={LanguageSplashScreen} options={{
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                        gestureDirection: 'horizontal-inverted',
                    }}/>
                    <Stack.Screen name="Language" component={LanguageScreen} options={{
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                        gestureDirection: 'horizontal-inverted',
                    }}/>
                </>
            )
            }
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
            <Stack.Screen name="EditProfile" component={EditProfileScreen}
                          options={{
                              headerTitle: '',
                              headerTransparent: true,
                          }}/>
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen}
                          options={{
                              headerTitle: '',
                              headerTransparent: true,
                          }}/>
            <Stack.Screen name="MyBanks" component={MyBanksScreen}
                          options={{
                              title: 'My Banks',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="SelectBank" component={SelectBankScreen}
                          options={{
                              title: 'Select Bank',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="MyCode" component={MyCodeScreen}
                          options={{
                              title: 'Scan to Request',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="AddBank" component={AddBankScreen}
                          options={{headerTitle: '', headerTransparent: true}}/>
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
            <Stack.Screen name="HowItWorks" component={HowItWorksScreen}
                          options={{
                              headerTitle: '',
                              headerTransparent: true,
                          }}/>
            <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} options={{headerShown: false}}/>
            <Stack.Screen name="PayingTo" component={PayingToScreen} options={{headerShown: false}}/>
            <Stack.Screen name="PayingSuccess" component={PayingSuccessScreen} options={{headerShown: false}}/>

        </Stack.Navigator>
    );
};

export default MainNavigation;
