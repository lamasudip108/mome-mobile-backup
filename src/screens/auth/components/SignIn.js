import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

import FloatingLabelInput from '@/shared/form/FloatingLabelInput';
import {useAuthentication} from '@/context/auth';
import Spinner from '@/shared/spinner';

const signinSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    password: Yup
        .string()
        .min(6, ({min}) => `Password must be at least ${min} characters.`)
        .required('Password is required.'),
});

const SignInForm = ({navigation}) => {

    const {loading, setLoading, message, setMessage, signIn} = useAuthentication();

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        validationSchema: signinSchema,
        initialValues: {email: 'customer@gmail.com', password: '123456'},
        onSubmit: values => {
            signIn(values);
        },
    });

    useEffect(() => {
        setMessage(null);
        setLoading(false)
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>

            <Image style={styles.profileImage} source={require('@/assets/img/profile.png')}/>

            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>{i18n.t('welcome')}</Text>
                <Text style={styles.textHeading2}>{i18n.t('message')}</Text>
            </View>

            <View style={styles.errorView}>
                {!message?.success &&
                <Text style={styles.errorText}>{message?.message}</Text>
                }
            </View>

            {loading &&
            <Spinner/>
            }

            <FloatingLabelInput
                label="USERNAME"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
            />

            <FloatingLabelInput
                label="PASSWORD"
                value={values.password}
                isPassword={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
                customShowPasswordComponent={<Ionicons style={{paddingRight: 15}} name="eye-off-outline" size={25}
                                                       color="#212121"/>}
                customHidePasswordComponent={<Ionicons style={{paddingRight: 15}} name="eye-outline" size={25}
                                                       color="#212121"/>}
            />

            <View style={styles.viewBtn}>
                <Button style={styles.loginBtn} onPress={handleSubmit} disabled={!isValid}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </Button>
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotButton} onPress={() => navigation.navigate('Forgot')}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.viewSignupLink}>
                <Text style={styles.textSignup}>Don’t have account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>SIGNUP HERE</Text>
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

    profileImage: {
        marginBottom: 30,
    },

    viewHeading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 40,
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

    viewBtn: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginBtn: {
        width: '100%',
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

    forgotButton: {
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

    signupButton: {
        color: '#0000FF',
        fontWeight: '600',
        paddingLeft: 8,
    },

    errorView: {
        width: '70%',
    },

    errorText: {
        fontSize: 14,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15,
    },
});


export default SignInForm;
