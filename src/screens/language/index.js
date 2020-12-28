import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, StatusBar} from 'react-native';

import {useDirection} from '@/context/language';

import CircleIcon from '@/shared/circle';

const LanguageScreen = ({navigation}) => {

    const {toggleDirection, direction} = useDirection();

    return (
        <View style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>

            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Select Language</Text>
            </View>

            <View style={styles.language}>
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
        flex: 1,
        backgroundColor: '#F7F9FB',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 120 : 60,
    },

    viewHeading: {
        height: 50,
        marginBottom: 10,
        width: '80%',
    },

    textHeading1: {
        fontSize: 24,
        //fontWeight: '600',
        fontFamily: 'SFProDisplay-Semibold',
        color: '#212121',
        marginBottom: 2,
    },

    language: {
        flexDirection: 'row',
        width: '80%',
        paddingRight: 10,
    },

    languageBtn: {
        width: '50%',
        borderRadius: 6,
        height: 110,
        marginBottom: 20,
        borderColor: '#0000FF5C',
        borderWidth: 2,
    },
    passive: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },

    active: {
        backgroundColor: '#D2D4FC',
    },

    langText: {
        color: '#212121',
        fontSize: 16,
        //fontWeight: '600',
        fontFamily: 'SFProDisplay-Medium',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

});

export default LanguageScreen;
