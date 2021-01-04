import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AgreementScreen from '@/screens/auth/Agreement';
import QRCodeScreen from '@/screens/home/QRCode';

const Stack = createStackNavigator();

const ModelNavigation = () => {

    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name="Agreement" component={AgreementScreen} options={{headerShown: false}}/>
            <Stack.Screen name="QRCode" component={QRCodeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default ModelNavigation;
