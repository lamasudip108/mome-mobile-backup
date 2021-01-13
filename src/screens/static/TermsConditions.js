import * as React from 'react';
import {I18nManager, Platform, Text, View, ScrollView, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';

const TermsConditionsScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.TERTIARY_BACKGROUND_COLOR}/>
            <View style={styles.meta}>
                <Text style={styles.title}>{i18n.t('terms')}</Text>
                <TouchableOpacity>
                    <Text onPress={() => navigation.goBack()}>
                        <AntIcon name="close" size={25} color={Colors.QUATERNARY_TEXT_COLOR}/>
                    </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.timestamp}>{i18n.t('last')}: 8 OCT 2020</Text>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.contentContainer}
            >
                <Text style={styles.headingTitle}>{i18n.t('introduction')}</Text>
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
                <Text style={styles.headingTitle}>{i18n.t('using')}</Text>
                <Text style={styles.headingSubTitle}>{i18n.t('paymentstaxes')}</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
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
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE,
        marginVertical: 8,
        color: Colors.PRIMARY_HEADING_COLOR,
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
        fontSize: Typography.FONT_SIZE_SMALL,
        color: Colors.TERTIARY_TEXT_COLOR,
        marginBottom: 10,
        marginLeft: 32,
        fontFamily: Typography.FONT_NORMAL,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    paragraph: {
        fontFamily: Typography.FONT_NORMAL,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        lineHeight: 24,
        marginTop: 15,
        marginBottom: 25,
        color: Colors.TERTIARY_TEXT_COLOR,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
});

export default TermsConditionsScreen;
