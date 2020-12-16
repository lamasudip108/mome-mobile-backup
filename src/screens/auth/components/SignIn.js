import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Button} from 'react-native';
import {FloatingLabelInput, setGlobalStyles} from 'react-native-floating-label-input';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const signinSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email.').required('Email is required.'),
    password: Yup
        .string()
        .min(6, ({min}) => `Password must be at least ${min} characters.`)
        .required('Password is required.'),
});

const SignInForm = (props) => {

    const {navigation, customerSignin, auths, authLoading,  authErrors} = props;

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        validationSchema: signinSchema,
        initialValues: {email: 'test@gmail.com', password: '123456'},
        onSubmit: values => {
            customerSignin(values);
        }
    });

    return (
        <View style={styles.container}>
            <Image style={styles.profileImage} source={require('@/assets/img/profile.png')}/>

            <StatusBar style="auto"/>

            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Welcome to MOME</Text>
                <Text style={styles.textHeading2}>Hassle free payment for your shopping.</Text>
            </View>

            {authErrors &&
            <Text style={styles.errorText}>{authErrors.message}</Text>
            }

            <FloatingLabelInput
                label="USERNAME"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
            />

            {errors.email &&
            <Text style={styles.errorText}>{errors.email}</Text>
            }

            <FloatingLabelInput
                label="PASSWORD"
                value={values.password}
                isPassword={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
            />

            {errors.password &&
            <Text style={styles.errorText}>{errors.password}</Text>
            }

            <Button style={styles.loginBtn} title="LOGIN" onPress={handleSubmit} disabled={!isValid}/>

            <TouchableOpacity>
                <Text style={styles.forgotButton} onPress={() => navigation.navigate('Forgot')}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.viewSignupLink}>
                <Text style={styles.textSignup}>Don’t have account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>SIGNUP HERE</Text>
                </TouchableOpacity>
            </View>
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

    profileImage: {
        marginBottom: 30,
    },

    viewHeading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 45,
    },

    textHeading1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: 2,
    },

    textHeading2: {
        fontSize: 14,
        color: '#2B2D42',
        width: 210,
        textAlign: 'center',
        lineHeight: 22,
    },

    inputView: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    loginBtn: {
        width: '70%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#0000FF',
    },

    loginText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    forgotButton: {
        height: 30,
        marginBottom: 30,
    },

    viewSignupLink: {
        flexDirection: 'row',
        fontSize: 14,
    },

    textSignup: {
        color: '#212121',
    },

    signupButton: {
        color: '#0000FF',
        fontWeight: '600',
        paddingLeft: 8,
    },
    errorText: {
        fontSize: 10,
        color: 'red',
    },
});

setGlobalStyles.containerStyles = {
    backgroundColor: '#FFFFFF',
    borderColor: '#F2F2F2',
    borderRadius: 30,
    width: '70%',
    height: 56,
    marginBottom: 20,
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

export default SignInForm;
