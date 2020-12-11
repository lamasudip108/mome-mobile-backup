import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { FloatingLabelInput, setGlobalStyles } from 'react-native-floating-label-input';

const SignUpScreen = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>

            <ScrollView
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                width: '100%',
              }}
            >
                <View style={styles.viewHeading}>
                    <Text style={styles.textHeading1}>Create new account</Text>
                </View>

                <FloatingLabelInput
                    label="FULLNAME"
                    value={fullName}
                    onChangeText={(value) => {
                      setFullName(value);
                    }}
                />

                <FloatingLabelInput
                    label="PHONE NUMBER"
                    value={phone}
                    keyboardType="numeric"
                    onChangeText={(value) => {
                      setPhone(value);
                    }}
                />

                <FloatingLabelInput
                    label="EMAIL"
                    value={email}
                    onChangeText={(value) => {
                      setEmail(value);
                    }}
                />

                <FloatingLabelInput
                    label="PASSWORD"
                    value={password}
                    isPassword={true}
                    onChangeText={(value) => {
                      setPassword(value);
                    }}
                />

                <FloatingLabelInput
                    label="CONFIRM PASSWORD"
                    value={confirmPassword}
                    isPassword={true}
                    onChangeText={(value) => {
                      setConfirmPassword(value);
                    }}
                />

                <TouchableOpacity style={styles.signupBtn}>
                    <Text style={styles.signupText}>SIGNUP</Text>
                </TouchableOpacity>

                <View style={styles.viewLoginLink}>
                    <Text style={styles.textLogin}>Already have login?</Text>
                    <TouchableOpacity>
                        <Text style={styles.login_button} onPress={() => navigation.navigate('SignIn')}>LOGIN HERE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
                       
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewHeading: {
        height: 50,
        marginBottom: 10,
        width: '70%',
    },

    textHeading1: {
        fontSize: 24,
        fontWeight: '700',
        color: '#212121',
        marginBottom: 2,
    },

    signupBtn: {
        //width: '70%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#0000FF',
    },

    signupText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    viewLoginLink: {
        flexDirection: 'row',
        fontSize: 14,
        marginTop: 108,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textLogin: {
        color: '#212121',
    },

    login_button: {
        color: '#0000FF',
        fontWeight: '600',
        paddingLeft: 8,
    }
});

setGlobalStyles.containerStyles = {
    backgroundColor: '#FFFFFF',
    borderColor: '#F2F2F2',
    borderRadius: 30,
    width: '70%',
    height: 56,
    marginBottom: 20,
};
setGlobalStyles.labelStyles = {
    paddingHorizontal: 5,
};
setGlobalStyles.inputStyles = {
    fontSize: 14,
    color: '#212121',
    paddingHorizontal: 10,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
};
setGlobalStyles.customLabelStyles = {
    colorFocused: '#BEBEBE',
    colorBlurred: '#BEBEBE',
    fontSizeFocused: 12,
    marginTop: 10,
};


export default SignUpScreen;
