import React from 'react';
import {Button, Text, View} from 'react-native';

const ProfileForm = (props) => {

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

export default ProfileForm;
