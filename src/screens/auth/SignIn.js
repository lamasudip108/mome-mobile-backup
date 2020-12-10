import * as React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, Button} from 'react-native';

const SignInScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('@/assets/img/profile.png')}/>

            <StatusBar style="auto"/>

            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Welcome to MOME</Text>
                <Text style={styles.textHeading2}>Hassle free payment for your shopping.</Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="USERNAME"
                    placeholderTextColor="#BEBEBE"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="PASSWORD"
                    placeholderTextColor="#BEBEBE"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgot_button} onPress={() => navigation.navigate('Forgot')}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.viewSignupLink}>
                <Text style={styles.textSignup}>Don’t have account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signup_button} onPress={() => navigation.navigate('SignUp')}>SIGNUP HERE</Text>
                </TouchableOpacity>
            </View>
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

    image: {
        //marginBottom: 40,
        marginBottom: 30,
    },

    viewHeading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        //marginTop: 29,
        marginBottom: 45,
    },

    textHeading1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: 2,
    },

    textHeading2: {
        fontSize: 14,
        color: '#2B2D42',
        width: 210,
        textAlign: 'center',
        lineHeight: 22,
    },

    inputView: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    loginBtn: {
        width: '70%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#0000FF',
    },

    loginText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    viewSignupLink: {
        flexDirection: 'row',
        fontSize: 14,
    },

    textSignup: {
        color: '#212121',
    },

    signup_button: {
        color: '#0000FF',
        fontWeight: '600',
        paddingLeft: 8,
    }
});

export default SignInScreen;
