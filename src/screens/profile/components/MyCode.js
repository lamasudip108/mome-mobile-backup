import * as React from 'react';
import {Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyCodeForm = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>
            <View style={styles.content}>   
                <View style={styles.myCode}>   
                    <MaterialIcons name="qr-code-2" size={257} color="#000000" />
                </View>
                <Text style={styles.name}>Fatima Abdullah</Text>
                <Text style={styles.scan}>Scan to pay @Fatima Abdullah</Text>
            </View>  
            
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        padding: 20,
        marginLeft: 32,
        marginRight: 32,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#A9A9A90F',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
    },
    myCode: {
        height: 257,
        width: 257,
    },
    name: {
        color: '#212121',
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 18,
        lineHeight: 27,
        marginTop: 7,
    },
    scan: {
        color: '#747E8F',
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        lineHeight: 21,
        paddingBottom: 25,
    },
    

});

export default MyCodeForm;
