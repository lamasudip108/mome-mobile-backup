import React from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {CommonStyles, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';

const updateSchema = Yup.object().shape({
    /*first_name: Yup
        .string()
        .required('First name is required.'),
    last_name: Yup
        .string()
        .required('Last name is required.'),
    phone: Yup
        .string()
        .required('Phone is required.'),
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),*/
});

const ChangePasswordScreen = (props) => {

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
        validationSchema: updateSchema,
        initialValues: {old_password: '', new_password: '', confirm_password: ''},
        onSubmit: values =>{
            navigation.navigate('Setting', {
                screen: 'Setting',
                params: { customer: values },
            });
        }
    });

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headingText1}>Change Password</Text>
                </View>

                <View style={styles.body}>
                    <FlatTextInput
                        label="OLD PASSWORD"
                        value={values.old_password}
                        isPassword={true}
                        secureTextEntry={true}
                        onChangeText={handleChange('old_password')}
                        onBlur={handleBlur('old_password')}
                        error={errors.old_password}
                        touched={touched.old_password}
                    />

                    <FlatTextInput
                        label="NEW PASSWORD"
                        value={values.new_password}
                        isPassword={true}
                        secureTextEntry={true}
                        onChangeText={handleChange('new_password')}
                        onBlur={handleBlur('new_password')}
                        error={errors.new_password}
                        touched={touched.new_password}
                    />

                    <FlatTextInput
                        label="CONFIRM PASSWORD"
                        value={values.confirmPassword}
                        isPassword={true}
                        secureTextEntry={true}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        error={errors.confirmPassword}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.buttonText}>UPDATE</Text>
                    </Button>
                </View>

            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },

    content: {
        ...CommonStyles.content,
        marginTop: Platform.OS === 'ios' ? 90 : 22,
    },

    header: {
        ...CommonStyles.header,
        marginTop: Platform.OS === 'ios' ? 22 : 42,
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

    buttonWrapper: {
        ...CommonStyles.buttonWrapper,
    },

    button: {
        ...CommonStyles.button,
        height: 56,
    },

    buttonText: {
        ...CommonStyles.buttonText,
    },

    errorWrapper: {
        width: '70%',
    },

    errorText: {
        ...CommonStyles.errorText,
    },
});


export default ChangePasswordScreen;
