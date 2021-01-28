import  React from 'react';
import {I18nManager, Platform, Text, View, ScrollView, Image, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {Button} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFormik} from 'formik';
import i18n from 'i18n-js';

import {CommonStyles, Typography, Colors} from '@/theme';
import ToastMessage from '@/shared/toast';

const screenHeight = Math.round(Dimensions.get('window').height);

const RequestConfirmation = (props) => {

    const {navigation, route, profile, loading, error, requestCustomerForMoney} = props;

    const {result, amount}  = route?.params;

    const {
        handleSubmit,
        isValid,
    } = useFormik({
        enableReinitialize:true,
        initialValues: {
            id: profile?.id,
            receiver_customer_id: result?.id,
            amount: amount,
            type:'request',
            notes:'Test'
        },
        onSubmit: values => {
            requestCustomerForMoney(values);
            if (error === null) {
                navigation.navigate('Home');
                ToastMessage.show(i18n.t('requestsent'));
            }
        },
    });

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
                <View style={styles.content}>
                    <View style={styles.contentWrapper}>
                        <View style={[styles.viewWrapper, styles.borderBottom]}>
                            <Text style={styles.text}>{i18n.t('amount')}</Text>
                            <Text style={styles.text1}>${amount}</Text>
                        </View>
                        <View style={[styles.viewWrapper, styles.borderBottom]}>
                            <Text style={styles.text}>{i18n.t('to')}</Text>
                            <View style={styles.contact}>
                                <View style={[styles.image, styles.imageContent]}>
                                    <MaterialIcons name="person" size={30} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.text1}>{result.first_name} {result.last_name}</Text>
                            </View>
                        </View>
                        <View style={styles.viewWrapper}>
                            <Text style={styles.text}>{i18n.t('via')}</Text>
                            <Text style={styles.text1}>{i18n.t('wallet')}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                            <Text style={styles.buttonText}>{i18n.t('confirmrequest')}</Text>
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
        marginTop: Platform.OS === 'ios' ? 150 : 120,
    },
    contentWrapper: {
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderRadius: 6,
        padding: 20,
        marginLeft: 32,
        marginRight: 32,
        shadowColor: '#A9A9A90F',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        width: '70%',
    },
    viewWrapper:{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    borderBottom: {
        ...CommonStyles.borderBottom,
    },
    text: {
        ...CommonStyles.text,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    text1: {
        ...CommonStyles.text1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    buttonWrapper: {
        ...CommonStyles.buttonWrapper,
        marginTop: 20,
    },
    button: {
        ...CommonStyles.button,
        height: 56,
    },
    buttonText: {
        ...CommonStyles.buttonText,
        fontFamily: Typography.FONT_BOLD,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
    },
    image:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor: 'rgba(210,212,252,0.50)',
        borderColor: 'rgba(210,212,252,0.50)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContent:{
        marginRight: 15,
    },

});

export default RequestConfirmation;
