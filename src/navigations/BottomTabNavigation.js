import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '@/screens/home';
import SettingScreen from '@/screens/setting';
import ProfileScreen from '@/screens/profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#0000FF',
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
                options={({route}) => ({
                    tabBarLabel: 'QRCode',
                    tabBarIcon: ({color, size, focused}) => (
                        <MaterialCommunityIcons name="qrcode-scan" color={'#FFFFFF'} size={focused ? 50 : size} style={{
                            borderRadius: 60,
                            backgroundColor: '#0000FF',
                            justifyContent: 'center',
                            alignItems: 'center',
                            bottom: 20,
                        }}/>
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
