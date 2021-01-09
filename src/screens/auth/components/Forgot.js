import React, {useCallback} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar, Dimensions} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';
import {useAuthentication} from '@/context/auth';
import Spinner from '@/shared/spinner';
import FlatTextInput from '@/shared/form/FlatTextInput';

const screenHeight = Math.round(Dimensions.get('window').height);

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
});

const ForgotForm = ({navigation}) => {

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
        initialValues: {email: ''},
        onSubmit: values => {
           // forgot(values);
        },
    });

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>

                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

                <View style={styles.header}>
                    <Text style={styles.headingText1}>Reset Password</Text>
                    <Text style={styles.headingText2}>To reset your password, please provide your username.</Text>
                </View>

                {/*<View style={styles.message}>*/}
                    {/*{!message?.success && <Text style={styles.errorText}>{message?.message}</Text>}*/}
                {/*</View>*/}

                {/*{loading && <Spinner/>}*/}

                <View style={styles.body}>
                    <FlatTextInput
                        label={i18n.t('username')}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onFocus={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                    />

                </View>
                <View style={styles.loginButtonWrapper}>
                    <Button style={styles.loginButton} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.loginButtonText}>SUBMIT</Text>
                    </Button>
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


export default ForgotForm;
