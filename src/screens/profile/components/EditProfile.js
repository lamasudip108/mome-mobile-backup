import React from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar, Dimensions, ScrollView} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {CommonStyles, Colors, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';

const screenHeight = Math.round(Dimensions.get('window').height);

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
        initialValues: {
            first_name: 'Fatima',
            last_name: 'Abdullah',
            phone: '+97442328900',
            email: 'customer@gmail.com',
            street: 'Beside Teyseer Petrol Station, Salwa Rd',
            city: 'Doha',
            state_province: 'Doha',
            po_box: '31021',
        },
        onSubmit: values => {
            navigation.navigate('Profile', {
                screen: 'Profile',
                params: {customer: values},
            });
        },
    });

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>

            <View style={styles.container}>

                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.headingText1}>Edit Profile</Text>
                    </View>

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
                            value={values.street}
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
