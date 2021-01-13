import React from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

import {CommonStyles, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';
import ToastMessage from '@/shared/toast';
import Spinner from '../../../shared/spinner';
import {getAsyncStorage} from '@/utils/storageUtil';
import {JWT_TOKEN} from '@/constants';
import {decodeUserID} from '@/utils/tokenUtil';

const passwordSchema = Yup.object().shape({
    old_password: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Old Password is required.'),
    new_password: Yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .required('New Password is required.'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password'), null], 'Password and confirm password must be match.')
        .required('Confirm password is required.'),
});

const ChangePasswordForm = (props) => {

    const {navigation, loading, error, updateCustomer} = props;

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        validationSchema: passwordSchema,
        initialValues: {old_password: '', new_password: '', confirm_password: ''},
        onSubmit: async (values) => {
            let token = await getAsyncStorage(JWT_TOKEN);
            values.id =  decodeUserID(token);
            updateCustomer(values);
            if (error === null) {
                navigation.navigate('Setting');
                ToastMessage.show(i18n.t('changedpasswordinfo'));
            }
        },
    });

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headingText1}>{i18n.t('change')}</Text>
                </View>

                <View style={styles.message}>
                    {error && <Text style={styles.errorText}>{error}</Text>}
                </View>

                {loading && <Spinner/>}

                <View style={styles.body}>
                    <FlatTextInput
                        label={i18n.t('old')}
                        value={values.old_password}
                        isPassword={true}
                        secureTextEntry={true}
                        onChangeText={handleChange('old_password')}
                        onBlur={handleBlur('old_password')}
                        onFocus={handleBlur('old_password')}
                        error={errors.old_password}
                        touched={touched.old_password}
                    />

                    <FlatTextInput
                        label={i18n.t('new')}
                        value={values.new_password}
                        isPassword={true}
                        secureTextEntry={true}
                        onChangeText={handleChange('new_password')}
                        onBlur={handleBlur('new_password')}
                        onFocus={handleBlur('new_password')}
                        error={errors.new_password}
                        touched={touched.new_password}
                    />

                    <FlatTextInput
                        label={i18n.t('confirm')}
                        value={values.confirm_password}
                        isPassword={true}
                        secureTextEntry={true}
                        onChangeText={handleChange('confirm_password')}
                        onBlur={handleBlur('confirm_password')}
                        onFocus={handleBlur('confirm_password')}
                        error={errors.confirm_password}
                        touched={touched.confirm_password}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Button style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.buttonText}>{i18n.t('update')}</Text>
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
    message: {
        ...CommonStyles.message,
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

export default ChangePasswordForm;
