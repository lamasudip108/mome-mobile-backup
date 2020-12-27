import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import FloatingLabelInput from '@/shared/form/FloatingLabelInput';

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
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Change Password</Text>
            </View>

            
                <FloatingLabelInput
                    label="OLD PASSWORD"
                    value={values.old_password}
                    isPassword={true}
                    onChangeText={handleChange('old_password')}
                    onBlur={handleBlur('old_password')}
                    error={errors.old_password}
                    touched={touched.old_password}
                />

                <FloatingLabelInput
                    label="NEW PASSWORD"
                    value={values.new_password}
                    isPassword={true}
                    onChangeText={handleChange('new_password')}
                    onBlur={handleBlur('new_password')}
                    error={errors.new_password}
                    touched={touched.new_password}
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
                    <Button style={styles.updateBtn} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.updateText}>UPDATE</Text>
                    </Button>
                </View>

              </View>  
            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB',
    },

    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 90 : 22,
    },

    viewHeading: {
        marginTop: Platform.OS === 'ios' ? 22 : 42,
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

    updateBtn: {
        width: '100%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000FF',
    },

    updateText: {
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


export default ChangePasswordScreen;
