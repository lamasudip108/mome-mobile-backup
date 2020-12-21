import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

import SettingScreen from '@/screens/setting';
import ProfileScreen from '@/screens/profile';
import HomeScreen from '@/screens/home';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {

    return (
        /*<Tab.Navigator
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
                        size = 50;
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#0000FF',
                inactiveTintColor: 'gray',
                showLabel: false,
                style: { 
                    backgroundColor: '#FFFFFF', 
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    //paddingTop: 15,
                    //paddingBottom: 15,
                },
            }}
        >
            <Tab.Screen name="Setting" component={SettingScreen}/>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>*/
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: 'gray',
                showLabel: false,
                style: { 
                    backgroundColor: '#FFFFFF', 
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    paddingTop: 15,
                    paddingBottom: 15,
                    height: 85,
                },
            }}
        >
          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              tabBarLabel: 'Setting',
              tabBarIcon: ({ color, size }) => (
               <Ionicons name="settings-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'QRCode',
              tabBarIcon: ({ color, size }) => (
                <View
                    style={{
                      position: 'absolute',
                      bottom: 20, // space from bottombar
                      height: 58,
                      width: 58,
                      borderRadius: 58,
                      backgroundColor: '#0000FF',
                      justifyContent: 'center',
                      alignItems: 'center',
                }}>
                <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
