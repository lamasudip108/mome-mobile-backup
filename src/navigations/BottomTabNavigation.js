import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingScreen from '@/screens/setting';
import ProfileScreen from '@/screens/profile';
import HomeScreen from '@/screens/home';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Profile') {
                        iconName = focused
                            ? 'person-outline'
                            : 'person-outline';
                    } else if (route.name === 'Setting') {
                        iconName = focused ? 'settings-outline' : 'settings-outline';
                    }
                    else if (route.name === 'Home') {
                        iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#0000FF',
                inactiveTintColor: 'gray',
                showLabel: false,
            }}
        >
            <Tab.Screen name="Setting" component={SettingScreen}/>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
