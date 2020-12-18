import React from 'react';
import {Button, Text, View} from 'react-native';

const ProfileForm = ({navigation}) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
            <Button
                title="Go to Language"
                onPress={() => navigation.navigate('Language')}
            />
        </View>
    );

};

export default ProfileForm;
