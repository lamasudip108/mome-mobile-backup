import React, {useEffect} from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {TextInput} from 'react-native-paper';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {CommonStyles, Colors, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';

const updateSchema = Yup.object().shape({
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

    const {navigation, route} = props;
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
        validationSchema: updateSchema,
        initialValues: {
            bank_name: 'Select Bank Here',
            bank_branch: 'Qatar',
            account_holder: 'Fatima Abdullah',
            account_number: '142328900',
        },
        onSubmit: values => {
            console.log("Values", values);
            navigation.navigate('MyBanks');
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
                    <Text style={styles.headingText1}>Add Bank</Text>
                </View>

                <View style={styles.formSection}>

                    <FlatTextInput
                        label="BANK NAME"
                        value={values.bank_name}
                        render={renderTouchText}
                        error={errors.bank_name}
                        touched={touched.bank_name}
                        /*right={
                            <TextInput.Icon
                                name={
                                    () => <Ionicons
                                                name='chevron-down'
                                                size={25}
                                                color={Colors.DENARY_TEXT_COLOR}
                                                onPress={() => navigation.navigate('SelectBank')}
                                            />
                                    }
                            />
                        }*/
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
                        onChangeText={handleChange('account_number')}
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
