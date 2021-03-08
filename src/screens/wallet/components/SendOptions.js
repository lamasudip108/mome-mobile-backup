import React from 'react';
import {I18nManager, Platform, Text, View, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import i18n from 'i18n-js';

import {CommonStyles, Colors} from '@/theme';

const SendOptions = (props) => {

    const {navigation, route} = props;

    const {amount} = route?.params?.values;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headingText}>{i18n.t('howsend')}</Text>
                </View>
                <View style={styles.options}>
                    <View style={styles.optionsWrapper}>
                        <TouchableOpacity   style={styles.optionsCircle} 
                                            onPress={() => navigation.navigate('SendQRCode', { amount: amount })}>
                           <Ionicons name={'scan-outline'} size={25} color={Colors.PRIMARY_TEXT_COLOR} style={{paddingLeft: 4}} />
                        </TouchableOpacity>
                        <Text style={styles.optionsText}>{i18n.t('scantosend')}</Text>
                    </View>

                    <View style={{marginLeft: 20}}></View>

                    <View style={styles.optionsWrapper}>
                        <TouchableOpacity style={styles.optionsCircle}
                                          onPress={() => navigation.navigate('SendContact', { amount: amount })}>
                            <Icons name={'address-book'} size={25} color={Colors.PRIMARY_TEXT_COLOR} />
                        </TouchableOpacity>
                        <Text style={styles.optionsText}>{i18n.t('sendtocontacts')}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
        padding: 32,
        paddingTop: 20,
        height: '100%',
        marginTop: Platform.OS === 'ios' ? 200 : 150,
        marginLeft: 32,
        marginRight: 32,
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    headingText: {
        ...CommonStyles.headingText,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    options: {
        ...CommonStyles.options,
    },
    optionsWrapper: {
        ...CommonStyles.optionsWrapper,
    },
    optionsCircle: {
        ...CommonStyles.optionsCircle,
    },
    optionsText: {
        ...CommonStyles.optionsText,
    },
    image: {},
});

export default SendOptions;
