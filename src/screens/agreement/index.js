import * as React from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import AntIcon from "react-native-vector-icons/AntDesign";

import {useTheme} from '@react-navigation/native';

const AgreementScreen = (props) => {

    const {navigation, route} = props;

    console.log("I am here", route?.params?.customer);

    const {colors} = useTheme();

    return (
        <View style={styles.container}>
            
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={styles.meta}>
                    <Text style={styles.title}>TERMS OF SERVICE</Text>
                    <TouchableOpacity>
                        <Text style={styles.closeBtn} onPress={() => navigation.goBack()}>
                          <AntIcon name="close" size={25} color="#212121" />
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.timestamp}>Last Updated: 8 OCT 2020</Text>

                <Text style={styles.headingTitle}>A. INTRODUCTION TO OUR SERVICES </Text>
                <Text style={styles.paragraph}>
                    This Agreement governs your use of Apple’s services (“Services”), 
                    through which you can buy, get, license, rent or subscribe to content, 
                    Apps (as defined below), and other in-app services (collectively, “Content”). 
                    ontent may be offered through the Services by Apple or a third party. 
                    Our Services are available for your use in your country or territory of residence (“Home Country”). 
                    By creating an account for use of the Services in a particular country or territory you are specifying it as your Home Country. 
                    To use our Services, you need compatible hardware, software (latest version recommended and sometimes required) and Internet access (fees may apply).
                </Text>
                <Text style={styles.headingTitle}>B. USING OUR SERVICES </Text>
                <Text style={styles.headingSubTitle}>PAYMENTS, TAXES, AND REFUNDS </Text>
                <Text style={styles.paragraph}>
                    This Agreement governs your use of Apple’s services (“Services”), 
                    through which you can buy, get, license, rent or subscribe to content, 
                    Apps (as defined below), and other in-app services (collectively, “Content”). 
                    ontent may be offered through the Services by Apple or a third party. 
                    Our Services are available for your use in your country or territory of residence (“Home Country”). 
                    By creating an account for use of the Services in a particular country or territory you are specifying it as your Home Country. 
                    To use our Services, you need compatible hardware, software (latest version recommended and sometimes required) and Internet access (fees may apply).
                </Text>
                
            </ScrollView>
            <View style={styles.termsBottom}>
                <View style={styles.checkBtn}>
                    <CheckBox style={styles.checkBox} checked={true}/>
                    <Text style={styles.textCheck}>I Accept the terms of service</Text>
                </View>
                <View style={styles.termsBottmBtn}>
                    <Button style={styles.cancelBtn} onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelText}>CANCEL</Text>
                    </Button>
                    <Button style={styles.acceptBtn} onPress={() => navigation.goBack()}>
                        <Text style={styles.acceptText}>ACCEPT</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        height: '20%',
        width: '85%',
        marginTop: 60,
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
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    title: {
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 8,
        color: "#212121",
    },
    headingTitle: {
        fontWeight: '600',
        fontSize: 14,
        marginVertical: 10,
        color: "#0000FF",
    },
    headingSubTitle: {
        fontSize: 12,
        color: '#2B2D42',
    },
    colors: {
        color: "#212121",
    },
    timestamp: {
        fontSize: 12,
        color: '#747E8F',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 24,
        marginTop: 15,
        marginBottom: 25,
        color: '#747E8F',
    },
    termsBottom: {
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 30,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 30,
        shadowColor: '#00000029',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,  
        elevation: 5,
    },
    checkBtn: {
       flexDirection: 'row',
    },
    checkBox: {
        borderRadius: 5,
        borderColor: '#0000FF',
        height: 30,
        padding: 5,
        width: 30,
        backgroundColor: '#0000FF',
        color: '#FFFFFF',
        marginRight: 15,
    },
    textCheck: {
        fontSize: 14,
        fontWeight: '600',
        color: '#212121',
        paddingLeft: 5,
        paddingTop: 5,
    },
    termsBottmBtn: {
        marginTop: 15,
        marginLeft: 12,
        marginRight: 20,
        marginBottom: 30,
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    cancelBtn: {
        width: '50%',
        borderRadius: 25,
        borderColor:'#0000FF',
        borderWidth: 2, 
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        marginRight: 5,
    },
    acceptBtn: {
        width: '50%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#0000FF',
        marginLeft: 5,
    },
    cancelText: {
        color: '#0000FF',
        fontWeight: 'bold',
    },
    acceptText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginVertical: 8,
    },
});
export default AgreementScreen;