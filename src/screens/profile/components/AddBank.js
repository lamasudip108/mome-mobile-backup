import React, {useState} from 'react';
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

const AddBankForm = (props) => {

    const [selectedValue, setSelectedValue] = useState("select");

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
        initialValues: {bank_name: 'Select Bank Here', bank_branch: 'Qatar', account_holder: 'Fatima Abdullah', account_number: '142328900'},
        onSubmit: values =>{
            navigation.navigate('MyBanks', {
                screen: 'MyBanks',
                params: { customer: values },
            });
        }
    });

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>
            <View style={styles.content}>
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Add Bank</Text>
            </View>
    
                <FloatingLabelInput 
                    label="BANK NAME"
                    value={values.bank_name}
                    onChangeText={handleChange('bank_name')}
                    onBlur={handleBlur('bank_name')}
                    error={errors.bank_name}
                    touched={touched.bank_name}
                />

                <FloatingLabelInput
                    label="BANK BRANCH"
                    value={values.bank_branch}
                    onChangeText={handleChange('bank_branch')}
                    onBlur={handleBlur('bank_branch')}
                    error={errors.bank_branch}
                    touched={touched.bank_branch}
                />

                <FloatingLabelInput
                    label="ACCOUNT HOLDER"
                    value={values.account_holder}
                    onChangeText={handleChange('account_holder')}
                    onBlur={handleBlur('account_holder')}
                    error={errors.account_holder}
                    touched={touched.account_holder}
                />

                <FloatingLabelInput
                    label="ACCOUNT NUMBER"
                    value={values.account_number}
                    keyboardType="numeric"
                    onChangeText={handleChange('accont_number')}
                    onBlur={handleBlur('account_number')}
                    error={errors.account_number}
                    touched={touched.account_number}
                />
        
                <View style={styles.viewBtn}>
                    <Button style={styles.updateBtn} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.updateText}>SAVE</Text>
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


export default AddBankForm;
