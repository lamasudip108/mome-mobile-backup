import React from 'react';
import {Platform, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {CommonStyles, Colors, Typography} from '@/theme';

import HomeScreen from '@/screens/home';
import SettingScreen from '@/screens/setting';
import ProfileScreen from '@/screens/profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors.PRIMARY_TEXT_COLOR,
                inactiveTintColor: 'gray',
                showLabel: false,
                style: {height: '10%'},
            }}
        >
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="settings-outline" color={color} size={size}/>
                    ),
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={({route, navigation}) => ({
                    tabBarLabel: 'QRCode',
                    tabBarIcon: ({color, size, focused}) => (
                        <View style={{
                            borderColor: Colors.TERTIARY_BORDER_COLOR,
                            borderWidth: 5,
                            borderRadius: 30,
                            backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom: Platform.OS === 'ios' ? 10 : 18,
                        }}>
                        <MaterialCommunityIcons name="qrcode-scan" color={Colors.QUINARY_TEXT_COLOR} size={focused ? 50 : size} onPress={() => {
                            navigation.navigate('Model', {
                                screen: 'QRCode'
                            });
                        }}/>
                        </View>
                    ),
                    tabBarVisible: true,
                })}/>
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" color={color} size={size}/>
                    ),
                    tabBarVisible: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
