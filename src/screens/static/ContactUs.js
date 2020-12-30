import * as React from 'react';
import {I18nManager, Platform, Text, View, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactUsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View style={styles.topContent}>
                <Image style={styles.momeLogo} source={require('@/assets/img/mome-logo-transparent.png')}/>
            </View>

            <View style={styles.middleContent}>
                <View style={styles.middleContentCircle}>
                    <View style={styles.circleEnvelope}>
                        <Icon name="envelope" size={20} color="#6B59ED" />
                    </View>
                    <View style={{ marginRight: 60}} />
                    <View style={styles.circleMessage}>
                        <MaterialCommunityIcons name="message-text" color="#0B8EFE" size={20} />
                    </View>
                    <View style={{ marginRight: 60}} />
                    <View style={styles.circlePhone}>
                        <MaterialCommunityIcons name="phone" color="#53D574" size={20}  />
                    </View>
                </View>

                <View style={styles.middleContentAbout}>
            	   <Text style={styles.aboutTitle}>About Us</Text>
                   <ScrollView style={{ height: Platform.OS === 'ios' ? 260 : 200,}}>
                       <Text style={styles.aboutContent}>
                        is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.
                       </Text>
                   </ScrollView>
                </View>            
            </View>

            <View style={styles.bottomContent}>
                <View style={styles.circleLocation}>
                    <Ionicons name="location-outline" size={25} color="#0000FF" />
                </View>
                <Text style={styles.locationText}>
                    Financial Center Street, 
                    Along Sheikh Zayed Road, 
                    Next to Burj Khalifa - United Arab Emirates
                </Text>
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000FF',
        color: '#FFFFFF',
    },
    topContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 90 : 50,
        marginLeft: 32,
        marginRight: 32,
        paddingTop: 40,
        paddingBottom: Platform.OS === 'ios' ? 100 : 80,
    },
    momeLogo: {
        width: 100,
        height: 109,
    },
    middleContent: {
    	backgroundColor: '#FFFFFF',
    	padding: 32,
    	marginTop: 10,
        height: '45%',
    },
    middleContentCircle: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '-18%',
        left: 32,
        right: 32,
        width: '100%',
        height: 93,
        backgroundColor: '#FFFFFF', 
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(1,1,1,0.10)',
        paddingTop: 15,
        paddingBottom: 15,
        zIndex: 1,
    },
    circleEnvelope: {
        backgroundColor: 'rgba(107,89,237,0.10)', 
        height:55, 
        width: 55,
        borderRadius: 27.5,
        borderColor: 'rgba(107,89,237,0.10)', 
        borderWidth: 0,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleMessage: {
        backgroundColor: 'rgba(11,142,254,0.10)', 
        height:55, 
        width: 55,
        borderRadius: 27.5,
        borderColor: 'rgba(11,142,254,0.10)', 
        borderWidth: 0,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circlePhone: {
        backgroundColor: 'rgba(83,213,116,0.10)', 
        height:55, 
        width: 55,
        borderRadius: 27.5,
        borderColor: 'rgba(83,213,116,0.10)', 
        borderWidth: 0,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleContentAbout: {
        paddingTop:  50,
        paddingBottom: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    aboutTitle: {
    	fontSize: 18, 
    	//fontWeight: '600',
        fontFamily: 'SFProDisplay-Medium', 
    	color: '#212121', 
    	lineHeight: 27,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    aboutContent: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14, 
        color: '#747E8F',
        lineHeight: 21,
        marginTop: 20,
        marginBottom: 20,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    bottomContent: {
        height: '100%',
        backgroundColor: '#F7F9FB',
        paddingTop: Platform.OS === 'ios' ? 20 : 10,
        paddingBottom: 0,
        paddingLeft: 32,
        paddingRight: 32,
        flexDirection: 'row',
    },
    circleLocation: {
        backgroundColor: 'rgba(0,0,255,0.10)',
        height:55, 
        width: 55,
        borderRadius: 27.5,
        borderColor: 'rgba(0,0,255,0.10)', 
        borderWidth: 0,
        marginTop: 20,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        width: '75%',
        marginTop: 13,
        paddingLeft: 15,
        fontSize: 14,
        lineHeight: 21,
        color: '#747E8F',
        fontFamily: 'SFProDisplay-Medium',
    },
});

export default ContactUsScreen;

