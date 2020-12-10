import React from 'react';
import {Text, View, Button} from 'react-native';

const LanguageScreen = ({navigation}) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>AR!</Text>
            <Button
                title="Sign In"
                onPress={() => navigation.navigate('SignIn')}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};

export default LanguageScreen;
