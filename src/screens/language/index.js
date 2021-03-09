import React from 'react';
import {I18nManager, Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';
import i18n from 'i18n-js';

import {useDirection} from '@/context/language';
import CircleIcon from '@/shared/circle';

import {CommonStyles, Colors, Typography} from '@/theme';

const LanguageScreen = ({navigation}) => {

    const {toggleDirection, direction} = useDirection();

    return (
        <View style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

            <View style={styles.header}>
                <Text style={styles.headingText1}>{i18n.t('select')}</Text>
            </View>

            <View style={styles.languageWrapper}>
                <TouchableOpacity
                    style={[styles.languageBtn, direction === 'rtl' ? styles.active : styles.passive]}
                    onPress={() => {
                        direction == 'ltr' ? toggleDirection('rtl') :   navigation.navigate('SignIn');
                    }}>
                    {direction === 'rtl' &&
                    <CircleIcon/>
                    }
                    <Text style={styles.langText}>AR</Text>
                </TouchableOpacity>

                <View style={{marginLeft: 10}}></View>

                <TouchableOpacity
                    style={[styles.languageBtn, direction === 'ltr' ? styles.active : styles.passive]}
                    onPress={() => {
                        direction === 'rtl' ? toggleDirection('ltr') :   navigation.navigate('SignIn');
                    }}>
                    {direction === 'ltr' &&
                    <CircleIcon/>
                    }
                    <Text style={styles.langText}>EN</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 120 : 60,
    },

    header: {
        height: 50,
        marginBottom: 10,
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    headingText1: {
        ...CommonStyles.headingText1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },

    languageWrapper: {
        flexDirection: 'row',
        width: '80%',
        paddingRight: 10,
    },

    languageBtn: {
        width: '50%',
        borderRadius: 6,
        height: 110,
        marginBottom: 20,
        borderColor: Colors.QUIDENARY_BORDER_COLOR,
        borderWidth: 2,
    },
    passive: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.SECONDARY_BUTTON_COLOR,
    },

    active: {
        backgroundColor: Colors.TERTIARY_BUTTON_COLOR,
    },

    langText: {
        color: Colors.PRIMARY_HEADING_COLOR,
        fontSize: Typography.FONT_SIZE_LARGE,
        fontFamily: Typography.FONT_MEDIUM,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

});

export default LanguageScreen;
