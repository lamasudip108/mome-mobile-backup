import React, {useState} from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {CommonStyles, Colors, Typography} from '@/theme';
import FlatTextInput from '@/shared/form/FlatTextInput';
import {Dropdown} from 'sharingan-rn-modal-dropdown';

export const data = [
  {
    value: 'Qatar National Bank',
    label: 'Qatar National Bank',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: 'Abu Dubai Islamic Bank',
    label: 'Abu Dubai Islamic Bank',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: 'Arab Bank PLC',
    label: 'Arab Bank PLC',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: 'Bank Melli Iran',
    label: 'Bank Melli Iran',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
];

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

    const [valueSS, setValueSS] = useState('');
    const onChangeSS = (value: string) => {
        setValueSS(value);
      };

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
                <View style={styles.header}>
                    <Text style={styles.headingText1}>Add Bank</Text>
                </View>

                <View style={{
                    width: '70%',
                    position: 'relative',
                    backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
                    borderRadius: 30,
                    borderColor: Colors.PRIMARY_BORDER_COLOR,
                    borderWidth: 1,
                    height: 56,
                    marginBottom: 15,
                    paddingHorizontal: 2,
                }}>
                <Dropdown
                        //label="BANK NAME"
                        data={data}
                        enableSearch
                        value={valueSS}
                        onChange={onChangeSS}
                        underlineColor="transparent"
                        textInputStyle={{
                            fontSize: Typography.FONT_SIZE_MEDIUM,
                            color: Colors.QUATERNARY_TEXT_COLOR,
                            marginTop: -7,
                        }}
                        textInputPlaceholder="BANK NAME"
                        textInputPlaceholderColor={Colors.DENARY_TEXT_COLOR}
                      />
                </View>

                <View style={styles.formSection}>

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
