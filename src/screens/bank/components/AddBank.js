import React, {useRef} from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
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

const AddBankForm = (props) => {

    const {navigation, route} = props;
    const selectedItem = route?.params?.item;
    const bankEl = useRef(null);

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
        initialValues: {
            bank_name: 'Select Bank Here',
            bank_branch: 'Qatar',
            account_holder: 'Fatima Abdullah',
            account_number: '142328900',
        },
        onSubmit: values => {
            console.log("Values", values);
            // navigation.navigate('MyBanks', {
            //     screen: 'MyBanks',
            //     params: {customer: values},
            // });
        },
    });

    const renderTouchText = () => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('SelectBank');
            }}>
                <Text>{selectedItem?.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headingText1}>Add Bank</Text>
                </View>

                <View style={styles.formSection}>

                    <FlatTextInput
                        ref={bankEl}
                        label="BANK NAME"
                        value={values.bank_name}
                        render={renderTouchText}
                        error={errors.bank_name}
                        touched={touched.bank_name}
                    />

                    <FlatTextInput
                        label="BANK BRANCH"
                        value={values.bank_branch}
                        onChangeText={handleChange('bank_branch')}
                        onBlur={handleBlur('bank_branch')}
                        error={errors.bank_branch}
                        touched={touched.bank_branch}
                    />

                    <FlatTextInput
                        label="ACCOUNT HOLDER"
                        value={values.account_holder}
                        onChangeText={handleChange('account_holder')}
                        onBlur={handleBlur('account_holder')}
                        error={errors.account_holder}
                        touched={touched.account_holder}
                    />

                    <FlatTextInput
                        label="ACCOUNT NUMBER"
                        value={values.account_number}
                        keyboardType="numeric"
                        onChangeText={handleChange('accont_number')}
                        onBlur={handleBlur('account_number')}
                        error={errors.account_number}
                        touched={touched.account_number}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.buttonText}>SAVE</Text>
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

    formSection: {
        ...CommonStyles.formSection,
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


export default AddBankForm;
