import React, {useEffect} from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';

const addBankSchema = Yup.object().shape({
    bank_name: Yup
        .string()
        .required('Bank name is required.'),
    bank_branch: Yup
        .string()
        .required('Bank branch is required.'),
    account_holder: Yup
        .string()
        .required('Account holder is required.'),
    account_number: Yup
        .string()
        .required('Account number is required.'),
});

const AddBankForm = (props) => {

    const {navigation, route, banks, loading, error, addBankByCustomerIdentifier, cleanCustomerBank} = props;

    const selectedItem = route?.params?.item;

    const {
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        validationSchema: addBankSchema,
        initialValues: {
            bank_name: i18n.t('select'),
            bank_branch: '',
            account_holder: '',
            account_number: '',
        },
        onSubmit: values => {
            addBankByCustomerIdentifier(values);
            if (error === null) {
                navigation.navigate('MyBanks');
            }
        },
    });

    const renderTouchText = ({value}) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('SelectBank');
            }}>
                <Text style={styles.renderText}>{value}</Text>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        if(selectedItem?.name){
            setFieldValue('bank_name', selectedItem?.name)
        }
    }, [selectedItem]);

    return (
        <View style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headingText1}>{i18n.t('addbanktitle')}</Text>
                </View>

                <View style={styles.formSection}>

                    <FlatTextInput
                        label={i18n.t('bankname')}
                        value={values.bank_name}
                        render={renderTouchText}
                        error={errors.bank_name}
                        touched={touched.bank_name}
                    />
                    <Ionicons
                        name='chevron-down'
                        size={25}
                        color={Colors.DENARY_TEXT_COLOR}
                        onPress={() => navigation.navigate('SelectBank')}
                        style={{
                            position: 'absolute',
                            top: 15,
                            right: 15,
                        }}
                    />

                    <FlatTextInput
                        label={i18n.t('bankbranch')}
                        value={values.bank_branch}
                        onChangeText={handleChange('bank_branch')}
                        onBlur={handleBlur('bank_branch')}
                        error={errors.bank_branch}
                        touched={touched.bank_branch}
                    />

                    <FlatTextInput
                        label={i18n.t('accountholder')}
                        value={values.account_holder}
                        onChangeText={handleChange('account_holder')}
                        onBlur={handleBlur('account_holder')}
                        error={errors.account_holder}
                        touched={touched.account_holder}
                    />

                    <FlatTextInput
                        label={i18n.t('accountnumber')}
                        value={values.account_number}
                        keyboardType="numeric"
                        onChangeText={handleChange('account_number')}
                        onBlur={handleBlur('account_number')}
                        error={errors.account_number}
                        touched={touched.account_number}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.buttonText}>{i18n.t('save')}</Text>
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

    renderText: {
        position: 'absolute',
        top: 30,
        left: 12,
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
