import * as React from 'react';
import {Platform, Text, View, ScrollView, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import AntIcon from 'react-native-vector-icons/AntDesign';

const TermsConditionsScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>
            <View style={styles.meta}>
                <Text style={styles.title}>TERMS OF SERVICE</Text>
                <TouchableOpacity>
                    <Text style={styles.closeBtn} onPress={() => navigation.goBack()}>
                        <AntIcon name="close" size={25} color="#212121"/>
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.timestamp}>Last Updated: 8 OCT 2020</Text>

            <ScrollView
                style={styles.scrollView}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        height: '20%',
        width: '85%',
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 0,
    },
    contentContainer: {
        paddingBottom: 30,
    },
    content: {
        paddingVertical: 16,
        padding: 15,
    },
    author: {
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: Platform.OS === 'ios' ? 60 : 10,
        marginLeft: 32,
        marginRight: 32,
    },
    title: {
        //fontWeight: '600',
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 18,
        marginVertical: 8,
        color: '#212121',
    },
    headingTitle: {
        //fontWeight: '600',
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 14,
        marginVertical: 10,
        color: '#0000FF',
    },
    headingSubTitle: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 12,
        color: '#2B2D42',
    },
    colors: {
        color: '#212121',
    },
    timestamp: {
        fontSize: 12,
        color: '#747E8F',
        marginBottom: 10,
        marginLeft: 32,
        fontFamily: 'SFProDisplay-Regular',
    },
    paragraph: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        lineHeight: 24,
        marginTop: 15,
        marginBottom: 25,
        color: '#747E8F',
    },
    errorView: {
        width: '70%',
    },
    errorText: {
        fontSize: 14,
        color: 'red',
        marginLeft: 32,
        marginBottom: 15,
        lineHeight: 18,
    },
});
export default TermsConditionsScreen;
