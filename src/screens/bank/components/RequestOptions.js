import * as React from 'react';
import {I18nManager, Platform, Text, View, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import i18n from 'i18n-js';

import {CommonStyles, Colors} from '@/theme';

const RequestOptions = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headingText}>{i18n.t('howrequest')}</Text>
                </View>
                <View style={styles.options}>
                    <View style={styles.optionsWrapper}>
                        <TouchableOpacity style={styles.optionsCircle}
                                          onPress={() => navigation.navigate('RequestContact')}>
                            <Image style={styles.image} source={require('@/assets/img/scan.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.optionsText}>{i18n.t('scantorequest')}</Text>
                    </View>

                    <View style={{marginLeft: 20}}></View>

                    <View style={styles.optionsWrapper}>
                        <TouchableOpacity style={styles.optionsCircle}
                                          onPress={() => navigation.navigate('RequestContact')}>
                            <Image style={styles.image} source={require('@/assets/img/contacts.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.optionsText}>{i18n.t('requesttocontacts')}</Text>
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

export default RequestOptions;
