import React from 'react';
import {Text, View, Button} from 'react-native';

const LanguageScreen = ({navigation}) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>AR!</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('SignIn')}
            />
        </View>
    );
};

export default LanguageScreen;
