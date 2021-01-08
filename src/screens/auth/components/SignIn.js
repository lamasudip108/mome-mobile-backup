import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, Dimensions} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';
import {useAuthentication} from '@/context/auth';
import Spinner from '@/shared/spinner';

import FlatTextInput from '@/shared/form/FlatTextInput';
import {TextInput} from 'react-native-paper';

const screenHeight = Math.round(Dimensions.get('window').height);

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    password: Yup
        .string()
        .min(6, ({min}) => `Password must be at least ${min} characters.`)
        .required('Password is required.'),
});

const SignInForm = ({navigation}) => {

    const [hidePass, setHidePass] = useState(true);

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
        validationSchema: signInSchema,
        initialValues: {email: 'krishna@gmail.com', password: '123456'},
        onSubmit: values => {
            signIn(values);
        },
    });

    useFocusEffect(
        useCallback(() => {
            setMessage(null);
            setLoading(false);
        }, []),
    );

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>

                <StatusBar style="auto"/>

                <Image style={styles.profileImage} source={require('@/assets/img/profile.png')}/>

                <View style={styles.header}>
                    <Text style={styles.headingText1}>{i18n.t('welcome')}</Text>
                    <Text style={styles.headingText2}>{i18n.t('message')}</Text>
                </View>

                <View style={styles.message}>
                    {!message?.success && <Text style={styles.errorText}>{message?.message}</Text>}
                </View>

                {loading && <Spinner/>}

                <View style={styles.body}>
                    <FlatTextInput
                        label={i18n.t('username')}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onFocus={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                    />

                    <FlatTextInput
                        label={i18n.t('password')}
                        value={values.password}
                        isPassword={true}
                        secureTextEntry={hidePass ? true : false}
                        onChangeText={handleChange('password')}
                        onFocus={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        right={
                            <TextInput.Icon 
                                name={
                                    () => <Ionicons 
                                                name={hidePass ? 'eye-off-outline' : 'eye-outline'} 
                                                size={25} 
                                                color={Colors.PRIMARY_HEADING_COLOR}
                                                onPress={() => setHidePass(!hidePass)}
                                            />
                                    } 
                            />
                        }
                    />
                    
                </View>
                <View style={styles.loginButtonWrapper}>
                    <Button style={styles.loginButton} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.loginButtonText}>{i18n.t('login')}</Text>
                    </Button>
                </View>

                <TouchableOpacity>
                    <Text style={styles.forgotButtonText} onPress={() => navigation.navigate('Forgot')}>{i18n.t('forgot')}</Text>
                </TouchableOpacity>

                <View style={styles.signUpLinkWrapper}>
                    <Text style={{color: Colors.PRIMARY_HEADING_COLOR}}>{i18n.t('dont')}</Text>
                    <TouchableOpacity>
                        <Text style={styles.signUpButtonText} onPress={() => navigation.navigate('SignUp')}>{i18n.t('signuphere')}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 40,
    },
    body: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        ...CommonStyles.message,
    },
    profileImage: {
        marginBottom: 30,
    },
    headingText1: {
        ...CommonStyles.headingText1,
        fontFamily: Typography.FONT_BOLD,
    },
    headingText2: {
        ...CommonStyles.headingText2,
        fontFamily: Typography.FONT_NORMAL,
        width: 210,
        textAlign: 'center',
    },
    loginButtonWrapper: {
        ...CommonStyles.buttonWrapper,
    },
    loginButton: {
        ...CommonStyles.button,
        height: 50,
        marginBottom: 20,
    },
    loginButtonText: {
        ...CommonStyles.buttonText,
    },
    forgotButtonText: {
        height: 30,
        marginBottom: 30,
    },
    signUpLinkWrapper: {
        ...CommonStyles.linkWrapper,
    },
    signUpButtonText: {
        color: Colors.SECONDARY_BUTTON_TEXT_COLOR,
        fontFamily: Typography.FONT_MEDIUM,
        paddingLeft: 8,
    },
    errorText: {
        ...CommonStyles.errorText,
    },
});


export default SignInForm;
