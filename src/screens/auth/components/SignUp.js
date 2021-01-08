import React from 'react';
import {
    I18nManager,
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';

const screenHeight = Math.round(Dimensions.get('window').height);

const signUpSchema = Yup.object().shape({
    first_name: Yup
        .string()
        .required('First name is required.'),
    last_name: Yup
        .string()
        .required('Last name is required.'),
    phone: Yup
        .string()
        .min(10, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Phone is required.'),
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Password is required.'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password and confirm password must be match.')
        .required('Confirm password is required.'),
});

const SignUpForm = (props) => {

    const {navigation} = props;

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        validationSchema: signUpSchema,
        initialValues: {first_name: '', last_name: '', phone: '', email: '', password: '', confirm_password: ''},
        onSubmit: values => {
            navigation.navigate('Model', {
                screen: 'Agreement',
                params: {customer: values},
            });
        },
    });

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>

                <StatusBar style="auto"/>

                <View style={styles.header}>
                    <Text style={styles.headingText1}>{i18n.t('create')}</Text>
                </View>

                <View style={styles.body}>

                    <FlatTextInput
                       label={i18n.t('firstname')}
                        value={values.first_name}
                        onChangeText={handleChange('first_name')}
                        onFocus={handleBlur('first_name')}
                        error={errors.first_name}
                        touched={touched.first_name}
                    />

                    <FlatTextInput
                        label={i18n.t('lastname')}
                        value={values.last_name}
                        onChangeText={handleChange('last_name')}
                        onFocus={handleBlur('last_name')}
                        error={errors.last_name}
                        touched={touched.last_name}
                    />

                    <FlatTextInput
                        label={i18n.t('phone')}
                        value={values.phone}
                        keyboardType="numeric"
                        onChangeText={handleChange('phone')}
                        onFocus={handleBlur('phone')}
                        error={errors.phone}
                        touched={touched.phone}
                    />

                    <FlatTextInput
                        label={i18n.t('email')}
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
                        onChangeText={handleChange('password')}
                        onFocus={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                    />

                    <FlatTextInput
                        label={i18n.t('confirm')}
                        value={values.confirm_password}
                        isPassword={true}
                        onChangeText={handleChange('confirm_password')}
                        onFocus={handleBlur('confirm_password')}
                        error={errors.confirm_password}
                    />
                </View>

                <View style={styles.signUpButtonWrapper}>
                    <Button style={styles.signUpButton} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.signUpButtonText}>{i18n.t('signup')}</Text>
                    </Button>
                </View>

                <View style={styles.loginLinkWrapper}>
                    <Text style={{color: Colors.QUATERNARY_TEXT_COLOR}}>{i18n.t('already')}</Text>
                    <TouchableOpacity>
                        <Text style={styles.loginButtonText} onPress={() => navigation.navigate('SignIn')}>{i18n.t('loginhere')}</Text>
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
        ...CommonStyles.header,
        marginTop: Platform.OS === 'ios' ? 22 : 52,
    },
    headingText1: {
        ...CommonStyles.headingText1,
        fontFamily: Typography.FONT_SEMI_BOLD,
        lineHeight: 36,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    body: {
        ...CommonStyles.body,
    },
    signUpButtonWrapper: {
        ...CommonStyles.buttonWrapper,
    },
    signUpButton: {
        ...CommonStyles.button,
        height: 56,
    },
    signUpButtonText: {
        ...CommonStyles.buttonText,
    },
    loginLinkWrapper: {
        ...CommonStyles.linkWrapper,
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: Colors.SECONDARY_BUTTON_TEXT_COLOR,
        fontFamily: Typography.FONT_MEDIUM,
        paddingLeft: 8,
    },
});


export default SignUpForm;
