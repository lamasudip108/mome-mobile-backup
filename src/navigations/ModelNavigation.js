import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AgreementScreen from '@/screens/agreement';

const Stack = createStackNavigator();

const ModelNavigation = () => {

    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name="Agreement" component={AgreementScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default ModelNavigation;
