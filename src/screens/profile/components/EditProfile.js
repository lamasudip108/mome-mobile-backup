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

const EditProfileForm = (props) => {

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
        initialValues: {first_name: 'Fatima', last_name: 'Abdullah', phone: '+97142328900', email: 'customer@gmail.com'},
        onSubmit: values =>{
            navigation.navigate('Profile', {
                screen: 'Profile',
                params: { customer: values },
            });
        }
    });

    return (
        <View style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>
            <View style={styles.content}>
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Edit Profile</Text>
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


export default EditProfileForm;
