import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SettingScreen from '@/screens/setting';
import ProfileScreen from '@/screens/profile';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Setting" component={SettingScreen}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
