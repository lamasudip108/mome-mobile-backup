import React, {useCallback} from 'react';
import {I18nManager, Platform, Text, View, ScrollView, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Button, CheckBox} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {CommonStyles, Colors, Typography} from '@/theme';

const AgreementForm = (props) => {

    const {navigation, route, customerSignUp, authErrors, cleanCustomerSignUp} = props;

    const handleSubmit = () => {
        const customerData = route?.params?.customer;
        delete customerData.confirm_password;
        customerSignUp(customerData);
    };

    useFocusEffect(
        useCallback(() => {
            return () => cleanCustomerSignUp();
        }, []),
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
            <View style={styles.meta}>
                <Text style={styles.title}>TERMS OF SERVICE</Text>
                <TouchableOpacity>
                    <Text onPress={() => navigation.goBack()}>
                        <AntIcon name="close" size={25} color="#212121"/>
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.timestamp}>Last Updated: 8 OCT 2020</Text>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.contentContainer}
            >
                <Text style={styles.headingTitle}>A. INTRODUCTION TO OUR SERVICES </Text>
                <Text style={styles.paragraph}>
                    This Agreement governs your use of Apple’s services (“Services”),
                    through which you can buy, get, license, rent or subscribe to content,
                    Apps (as defined below), and other in-app services (collectively, “Content”).
                    ontent may be offered through the Services by Apple or a third party.
                    Our Services are available for your use in your country or territory of residence (“Home Country”).
                    By creating an account for use of the Services in a particular country or territory you are
                    specifying it as your Home Country.
                    To use our Services, you need compatible hardware, software (latest version recommended and
                    sometimes required) and Internet access (fees may apply).
                </Text>
                <Text style={styles.headingTitle}>B. USING OUR SERVICES </Text>
                <Text style={styles.headingSubTitle}>PAYMENTS, TAXES, AND REFUNDS </Text>
                <Text style={styles.paragraph}>
                    This Agreement governs your use of Apple’s services (“Services”),
                    through which you can buy, get, license, rent or subscribe to content,
                    Apps (as defined below), and other in-app services (collectively, “Content”).
                    ontent may be offered through the Services by Apple or a third party.
                    Our Services are available for your use in your country or territory of residence (“Home Country”).
                    By creating an account for use of the Services in a particular country or territory you are
                    specifying it as your Home Country.
                    To use our Services, you need compatible hardware, software (latest version recommended and
                    sometimes required) and Internet access (fees may apply).
                </Text>

            </ScrollView>

            <View style={styles.termsWrapper}>
                {authErrors &&
                <Text style={styles.errorText}>{authErrors.message}</Text>
                }
                <View style={styles.checkboxWrapper}>
                    <CheckBox style={styles.checkbox} checked={true}/>
                    <Text style={styles.checkboxText}>I Accept the terms of service</Text>
                </View>
                <View style={styles.termsActionButton}>
                    <Button style={styles.cancelButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelButtonText}>CANCEL</Text>
                    </Button>
                    <Button style={styles.acceptButton} onPress={() => handleSubmit()}>
                        <Text style={styles.acceptButtonText}>ACCEPT</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    scrollContainer: {
        height: '20%',
        width: '85%',
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 0,
    },
    contentContainer: {
        paddingBottom: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: Platform.OS === 'ios' ? 50 : 10,
        marginLeft: 32,
        marginRight: 32,
    },
    title: {
        fontFamily: Typography.FONT_SEMI_BOLD,
        fontSize: 18,
        marginVertical: 8,
        color: '#212121',
    },
    headingTitle: {
        ...CommonStyles.headingTitle,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    headingSubTitle: {
        ...CommonStyles.headingSubTitle,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    timestamp: {
        fontSize: 12,
        color: '#747E8F',
        marginBottom: 10,
        marginLeft: 32,
        fontFamily: Typography.FONT_NORMAL,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    paragraph: {
        fontFamily: Typography.FONT_NORMAL,
        fontSize: 14,
        lineHeight: 24,
        marginTop: 15,
        marginBottom: 25,
        color: '#747E8F',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    termsWrapper: {
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 30,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 20,
        shadowColor: '#00000029',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
    },
    checkboxWrapper: {
        flexDirection: 'row',
    },
    checkbox: {
        borderRadius: 5,
        borderColor: '#0000FF',
        height: Platform.OS === 'ios' ? 30 : 24,
        padding: Platform.OS === 'ios' ? 5 : 2,
        width: Platform.OS === 'ios' ? 30 : 24,
        backgroundColor: '#0000FF',
        color: '#FFFFFF',
        marginRight: 15,
    },
    checkboxText: {
        fontSize: 14,
        fontFamily: Typography.FONT_MEDIUM,
        color: '#212121',
        paddingLeft: 5,
        paddingTop: 5,
    },
    termsActionButton: {
        marginTop: 15,
        marginLeft: 12,
        marginRight: 20,
        marginBottom: 5,
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    cancelButton: {
        width: '50%',
        borderRadius: 25,
        borderColor: '#0000FF',
        borderWidth: 2,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.SECONDARY_BUTTON_COLOR,
        marginRight: 5,
    },
    cancelButtonText: {
        color: Colors.SECONDARY_BUTTON_TEXT_COLOR,
        fontFamily: Typography.FONT_BOLD,
    },
    acceptButton: {
        width: '50%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY_BUTTON_COLOR,
        marginLeft: 5,
    },
    acceptButtonText: {
        color: Colors.PRIMARY_BUTTON_TEXT_COLOR,
        fontFamily: Typography.FONT_BOLD,
    },
    errorText: {
        ...CommonStyles.errorText,
        marginLeft: 12,
        marginBottom: 5,
        marginTop: 0,
        lineHeight: 18,
    },
});
export default AgreementForm;
