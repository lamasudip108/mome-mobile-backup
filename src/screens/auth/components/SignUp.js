import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {FloatingLabelInput, setGlobalStyles} from 'react-native-floating-label-input';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    fullName: Yup
        .string()
        .required('Name is required.'),
    phone: Yup
        .string()
        .required('Phone is required.'),
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Password is required.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password and confirm password must be match.'),
});

const SignUpForm = (props) => {

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
        validationSchema: signupSchema,
        initialValues: {first_name: '', last_name: '', phone: '', email: '', password: '', confirmPassword: '', status: 'invited'},
        onSubmit: values =>{
            navigation.navigate('Model', {
                screen: 'Agreement',
                params: { customer: values },
            });
        }
    });

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>

            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: 40,
                }}
            >
                <View style={styles.viewHeading}>
                    <Text style={styles.textHeading1}>Create new account</Text>
                </View>

                <FloatingLabelInput
                    label="FIRST NAME"
                    value={values.first_name}
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    error={errors.first_name}
                    touched={touched.first_name}
                />
                <View style={styles.errorView}>
                    {errors.first_name &&
                    <Text style={styles.errorText}>{errors.first_name}</Text>
                    }
                </View>

                <FloatingLabelInput
                    label="LAST NAME"
                    value={values.last_name}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    error={errors.last_name}
                    touched={touched.last_name}
                />
                <View style={styles.errorView}>
                    {errors.last_name &&
                    <Text style={styles.errorText}>{errors.last_name}</Text>
                    }
                </View>

                <FloatingLabelInput
                    label="PHONE NUMBER"
                    value={values.phone}
                    keyboardType="numeric"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    error={errors.phone}
                    touched={touched.phone}
                />
                <View style={styles.errorView}>
                    {errors.phone &&
                    <Text style={styles.errorText}>{errors.phone}</Text>
                    }
                </View>

                <FloatingLabelInput
                    label="EMAIL"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    error={errors.email}
                    touched={touched.email}
                />
                <View style={styles.errorView}>
                    {errors.email &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                    }
                </View>

                <FloatingLabelInput
                    label="PASSWORD"
                    value={values.password}
                    isPassword={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={errors.password}
                    touched={touched.password}
                />
                <View style={styles.errorView}>
                    {errors.password &&
                    <Text style={styles.errorText}>{errors.password}</Text>
                    }
                </View>

                <FloatingLabelInput
                    label="CONFIRM PASSWORD"
                    value={values.confirmPassword}
                    isPassword={true}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                />
                <View style={styles.errorView}>
                    {errors.confirmPassword &&
                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                    }
                </View>

                <View>
                    <Button style={styles.signupBtn} onPress={handleSubmit} disabled={!isValid}>
                        <Text style={styles.signupText}>SIGNUP</Text>
                    </Button>
                </View>

                <View style={styles.viewLoginLink}>
                    <Text style={styles.textLogin}>Already have login?</Text>
                    <TouchableOpacity>
                        <Text style={styles.loginButton} onPress={() => navigation.navigate('SignIn')}>LOGIN HERE</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB',
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewHeading: {
        height: 50,
        marginBottom: 10,
        width: '70%',
    },

    textHeading1: {
        fontSize: 24,
        fontWeight: '700',
        color: '#212121',
        marginBottom: 2,
    },

    signupBtn: {
        width: '100%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#0000FF',
    },

    signupText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    viewLoginLink: {
        flexDirection: 'row',
        fontSize: 14,
        marginTop: 108,
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

setGlobalStyles.containerStyles = {
    backgroundColor: '#FFFFFF',
    borderColor: '#F2F2F2',
    borderRadius: 30,
    width: '70%',
    height: 56,
    marginBottom: 15,
};
setGlobalStyles.labelStyles = {
    paddingHorizontal: 5,
};

setGlobalStyles.inputStyles = {
    fontSize: 14,
    color: '#212121',
    paddingHorizontal: 10,
    marginLeft: 5,
    fontWeight: '500',
};

setGlobalStyles.customLabelStyles = {
    colorFocused: '#BEBEBE',
    colorBlurred: '#BEBEBE',
    fontSizeFocused: 12,
    marginTop: 10,
};


export default SignUpForm;
