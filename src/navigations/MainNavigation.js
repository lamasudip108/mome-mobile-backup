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
import ForgotScreen from '@/screens/auth/Forgot';

import EditProfileScreen from '@/screens/profile/EditProfile';
import MyQRCodeScreen from '@/screens/profile/MyQRCode';

import TransactionScreen from '@/screens/transaction';

import PaymentReviewScreen from '@/screens/payment/Review';
import PaymentConfirmationScreen from '@/screens/payment/Confirmation';

import MyBankScreen from '@/screens/bank';
import AddBankScreen from '@/screens/bank/AddBank';
import SelectBankScreen from '@/screens/bank/SelectBank';
import SelectMyBankScreen from '@/screens/bank/SelectMyBank';
import LoadMoneyScreen from '@/screens/bank/LoadMoney';

import RequestAmountScreen from '@/screens/wallet/RequestAmount';
import RequestOptionsScreen from '@/screens/wallet/RequestOptions';
import RequestContactScreen from '@/screens/wallet/RequestContact';
import RequestQRCodeScreen from '@/screens/wallet/RequestQRCode';
import RequestConfirmationScreen from '@/screens/wallet/RequestConfirmation';

import SendAmountScreen from '@/screens/wallet/SendAmount';
import SendOptionsScreen from '@/screens/wallet/SendOptions';
import SendContactScreen from '@/screens/wallet/SendContact';
import SendQRCodeScreen from '@/screens/wallet/SendQRCode';
import SendConfirmationScreen from '@/screens/wallet/SendConfirmation';

import HistoryScreen from '@/screens/wallet/History';
import HistoryDetailScreen from '@/screens/wallet/HistoryDetail';

import ContactUsScreen from '@/screens/static/ContactUs';
import HowItWorksScreen from '@/screens/static/HowItWorks';
import TermsConditionsScreen from '@/screens/static/TermsConditions';

import ChangePasswordScreen from '@/screens/setting/ChangePassword';

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
                return 'Settings';
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
            <Stack.Screen name="Forgot" component={ForgotScreen} options={{
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
            <Stack.Screen name="MyBanks" component={MyBankScreen}
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
            <Stack.Screen name="AddBank" component={AddBankScreen}
                          options={{headerTitle: '', headerTransparent: true}}/>
            <Stack.Screen name="SelectMyBank" component={SelectMyBankScreen}
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
            <Stack.Screen name="LoadMoney" component={LoadMoneyScreen}
                          options={{headerTitle: '', headerTransparent: true}}/>
            <Stack.Screen name="MyQRCode" component={MyQRCodeScreen}
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
            <Stack.Screen name="History" component={HistoryScreen}
                          options={{
                              title: 'History',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="HistoryDetail" component={HistoryDetailScreen}
                          options={{
                              title: 'History Detail',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="RequestAmount" component={RequestAmountScreen}
                          options={{
                              title: 'Amount to request',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="RequestOptions" component={RequestOptionsScreen}
                          options={{
                              title: 'Request Options',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="RequestContact" component={RequestContactScreen}
                          options={{
                              title: 'Select Contact',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="RequestQRCode" component={RequestQRCodeScreen}
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
            <Stack.Screen name="RequestConfirmation" component={RequestConfirmationScreen}
                          options={{
                              title: 'Confirm fund request',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="SendAmount" component={SendAmountScreen}
                          options={{
                              title: 'Amount to send',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="SendOptions" component={SendOptionsScreen}
                          options={{
                              title: 'Send Options',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="SendContact" component={SendContactScreen}
                          options={{
                              title: 'Select Contact',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="SendQRCode" component={SendQRCodeScreen}
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
            <Stack.Screen name="SendConfirmation" component={SendConfirmationScreen}
                          options={{
                              title: 'Confirm fund transfer',
                              headerTintColor: '#000',
                              headerTitleStyle: {
                                  fontWeight: '700',
                                  fontSize: 16,
                              },
                              headerTransparent: true,
                          }}
            />
            <Stack.Screen name="Transaction" component={TransactionScreen}
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
            <Stack.Screen name="PaymentReview" component={PaymentReviewScreen} options={{headerShown: false}}/>
            <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen} options={{headerShown: false}}/>

        </Stack.Navigator>
    );
};

export default MainNavigation;
