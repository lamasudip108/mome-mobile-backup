import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import FloatingLabelInput from '@/shared/form/FloatingLabelInput';

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
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Add Bank</Text>
            </View>

            <View style={{
                width: '70%', 
                position: 'relative',
                backgroundColor: '#FFFFFF',
                borderRadius: 30,
                borderColor: '#F2F2F2',
                borderWidth: 1,
                width: '70%',
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
                        fontSize: 14, 
                        color: '#212121', 
                        marginTop: -7,
                    }}
                    textInputPlaceholder="BANK NAME"
                    textInputPlaceholderColor="#BEBEBE"
                  />
            </View>
    
            <View style={styles.viewForm}>

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
            </View>

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
        //fontWeight: '700',
        fontFamily: 'SFProDisplay-Semibold',
        color: '#212121',
        marginBottom: 2,
        lineHeight: 36,
    },

    viewForm: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
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
        //fontWeight: 'bold',
        fontFamily: 'SFProDisplay-Bold',
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
