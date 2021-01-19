import * as React from 'react';
import {I18nManager, Platform, Text, View, Image, StyleSheet, StatusBar} from 'react-native';
import {Button} from 'native-base';
import i18n from 'i18n-js';

import {CommonStyles, Typography, Colors} from '@/theme';

const ConfirmFundTransfer = (props) => {

    const {navigation, route} = props;

    const confirm  = route?.params?.values;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            <View style={styles.content}>
                <View style={styles.contentWrapper}>
                    <View style={[styles.viewWrapper, styles.borderBottom]}>
                        <Text style={styles.text}>{i18n.t('amount')}</Text>
                        <Text style={styles.text1}>${confirm.amount}</Text>
                    </View>
                    <View style={[styles.viewWrapper, styles.borderBottom]}>
                        <Text style={styles.text}>{i18n.t('to')}</Text>
                        <View style={styles.contact}>
                            <Image style={[styles.image, styles.imageContent]} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
                            <Text style={styles.text1}>Robbin Gorkhali</Text>
                        </View>
                    </View>
                    <View style={styles.viewWrapper}>
                        <Text style={styles.text}>{i18n.t('via')}</Text>
                        <Text style={styles.text1}>{i18n.t('wallet')}</Text>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>{i18n.t('confirmsend')}</Text>
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
    },
    imageContent:{
        marginRight: 15,
    },

});

export default ConfirmFundTransfer;
