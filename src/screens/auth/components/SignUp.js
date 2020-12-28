import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import FloatingLabelInput from '@/shared/form/FloatingLabelInput';

const signupSchema = Yup.object().shape({
    first_name: Yup
        .string()
        .required('First name is required.'),
    last_name: Yup
        .string()
        .required('Last name is required.'),
    phone: Yup
        .string()
        .required('Phone is required.'),
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Password is required.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password and confirm password must be match.')
        .required('Confirm Password is required.'),
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
        validationSchema: signupSchema,
        initialValues: {first_name: '', last_name: '', phone: '', email: '', password: '', confirmPassword: ''},
        onSubmit: values =>{
            navigation.navigate('Model', {
                screen: 'Agreement',
                params: { customer: values },
            });
        }
    });

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>

            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Create new account</Text>
            </View>


                <FloatingLabelInput
                    label="FIRST NAME"
                    value={values.first_name}
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    error={errors.first_name}
                    touched={touched.first_name}
                />

                <FloatingLabelInput
                    label="LAST NAME"
                    value={values.last_name}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    error={errors.last_name}
                    touched={touched.last_name}
                />

                <FloatingLabelInput
                    label="PHONE NUMBER"
                    value={values.phone}
                    keyboardType="numeric"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    error={errors.phone}
                    touched={touched.phone}
                />

                <FloatingLabelInput
                    label="EMAIL"
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
                />

                <FloatingLabelInput
                    label="CONFIRM PASSWORD"
                    value={values.confirmPassword}
                    isPassword={true}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    error={errors.confirmPassword}
                />

                <View style={styles.viewBtn}>
                    <Button style={styles.signupBtn} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.signupText}>SIGNUP</Text>
                    </Button>
                </View>

                <View style={styles.viewLoginLink}>
                    <Text style={styles.textLogin}>Already have login?</Text>
                    <TouchableOpacity>
                        <Text style={styles.loginButton} onPress={() => navigation.navigate('SignIn')}>LOGIN HERE</Text>
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

    viewHeading: {
        marginTop: Platform.OS === 'ios' ? 22 : 62,
        width: '70%',
        paddingBottom: 10,
    },

    textHeading1: {
        fontSize: 24,
        fontWeight: '700',
        color: '#212121',
        marginBottom: 2,
        lineHeight: 36,
    },

    viewBtn: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signupBtn: {
        width: '100%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
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
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textLogin: {
        color: '#212121',
    },

    loginButton: {
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


export default SignUpForm;
