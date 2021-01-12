import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar, Dimensions} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';
import Spinner from '@/shared/spinner';
import FlatTextInput from '@/shared/form/FlatTextInput';

const screenHeight = Math.round(Dimensions.get('window').height);

const forgotSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
});

const ForgotForm = (props) => {

    const {navigation, error, loading, forgotPassword} = props;

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        validationSchema: forgotSchema,
        initialValues: {email: ''},
        onSubmit: values => {
            forgotPassword(values);
            if (error === null) {
                navigation.navigate('SignIn');
            }
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

                <View style={styles.message}>
                    {error && <Text style={styles.errorText}>{error}</Text>}
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

                </View>
                <View style={styles.submitButtonWrapper}>
                    <Button style={styles.submitButton} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.submitButtonText}>SUBMIT</Text>
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
    submitButtonWrapper: {
        ...CommonStyles.buttonWrapper,
    },
    submitButton: {
        ...CommonStyles.button,
        height: 56,
        marginBottom: 20,
    },
    submitButtonText: {
        ...CommonStyles.buttonText,
    },
    errorText: {
        ...CommonStyles.errorText,
    },
    successText: {
        ...CommonStyles.successText,
    },
});


export default ForgotForm;
