import React, {useEffect} from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar, Dimensions, ScrollView} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {CommonStyles, Colors, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';
import Spinner from '@/shared/spinner';
import ToastMessage from '@/shared/toast';
import {getAsyncStorage} from '@/utils/storageUtil';
import {decodeUserID} from '@/utils/tokenUtil';
import {JWT_TOKEN} from '@/constants';

const screenHeight = Math.round(Dimensions.get('window').height);

const profileUpdateSchema = Yup.object().shape({
    first_name: Yup
        .string()
        .required('First name is required.'),
    last_name: Yup
        .string()
        .required('Last name is required.'),
    phone: Yup
        .string()
        .min(10, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Phone is required.'),
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    street: Yup
        .string()
        .required('Stree is required.'),
    city: Yup
        .string()
        .required('City is required.'),
    state_province: Yup
    .string()
    .required('State/Province is required.'),
    po_box: Yup
        .string()
        .required('P.O.BOX is required.'),
});

const EditProfileForm = (props) => {

    const {navigation, profile, loading, error, fetchCustomerByIdentifier, updateCustomer, cleanCustomer} = props;


    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        enableReinitialize:true,
        validationSchema: profileUpdateSchema,
        initialValues: {
            first_name: profile?.first_name,
            last_name: profile?.last_name,
            email: profile?.email,
            phone: profile?.phone,
            street: profile?.street,
            city: profile?.city,
            state_province: profile?.state_province,
            po_box: profile?.po_box,
        },
        onSubmit: values => {
            values.id = profile?.id;
            updateCustomer(values);
            if (error !== null) {
                navigation.navigate('Profile');
                ToastMessage.show('Your information has been successfully updated.');
            }
        },
    });

    useEffect(() => {
        const fetchCustomerAsync = async () => {
            let token = await getAsyncStorage(JWT_TOKEN);
            let customerID = decodeUserID(token);
            fetchCustomerByIdentifier(customerID);
        };
        fetchCustomerAsync();

        return () => {
            cleanCustomer();
        };
    }, []);

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>

            <View style={styles.container}>

                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headingText1}>Edit Profile</Text>
                    </View>

                    <View style={styles.message}>
                        {error && <Text style={styles.errorText}>{error}</Text>}
                    </View>

                    {loading && <Spinner/>}

                    <View style={styles.body}>
                        <FlatTextInput
                            label="FIRST NAME"
                            value={values.first_name}
                            onChangeText={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                            error={errors.first_name}
                            touched={touched.first_name}
                        />

                        <FlatTextInput
                            label="LAST NAME"
                            value={values.last_name}
                            onChangeText={handleChange('last_name')}
                            onBlur={handleBlur('last_name')}
                            error={errors.last_name}
                            touched={touched.last_name}
                        />

                        <FlatTextInput
                            label="PHONE NUMBER"
                            value={values.phone}
                            keyboardType="numeric"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            error={errors.phone}
                            touched={touched.phone}
                        />

                        <FlatTextInput
                            label="EMAIL"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            error={errors.email}
                            touched={touched.email}
                        />

                        <FlatTextInput
                            label="STREET"
                            value={values.street}
                            onChangeText={handleChange('street')}
                            onBlur={handleBlur('street')}
                            error={errors.street}
                            touched={touched.street}
                        />

                        <FlatTextInput
                            label="CITY"
                            value={values.city}
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            error={errors.city}
                            touched={touched.city}
                        />

                        <FlatTextInput
                            label="STATE/PROVINCE"
                            value={values.state_province}
                            onChangeText={handleChange('state_province')}
                            onBlur={handleBlur('state_province')}
                            error={errors.state_province}
                            touched={touched.state_province}
                        />

                        <FlatTextInput
                            label="P.O.BOX"
                            value={values.po_box}
                            onChangeText={handleChange('po_box')}
                            onBlur={handleBlur('po_box')}
                            error={errors.po_box}
                            touched={touched.po_box}
                        />
                    </View>


                    <View style={styles.buttonWrapper}>
                        <Button style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                            <Text style={styles.buttonText}>UPDATE</Text>
                        </Button>
                    </View>

                </View>

            </View>

        </ScrollView>
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


export default EditProfileForm;
