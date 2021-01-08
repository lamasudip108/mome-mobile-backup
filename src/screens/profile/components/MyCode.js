import * as React from 'react';
import {Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {CommonStyles, Colors, Typography} from '@/theme';

const MyCodeForm = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            <View style={styles.content}>   
                <View style={styles.myCode}>   
                    <MaterialIcons name="qr-code-2" size={257} color={Colors.NONARY_TEXT_COLOR} />
                </View>
                <Text style={styles.name}>Fatima Abdullah</Text>
                <Text style={styles.scan}>Scan to pay @Fatima Abdullah</Text>
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
        ...CommonStyles.content,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderRadius: 25,
        padding: 20,
        marginLeft: 32,
        marginRight: 32,
        shadowColor: '#A9A9A90F',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
    },
    myCode: {
        height: 257,
        width: 257,
    },
    name: {
        color: Colors.QUATERNARY_TEXT_COLOR,
        fontFamily: Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE,
        lineHeight: 27,
        marginTop: 7,
    },
    scan: {
        color: Colors.TERTIARY_TEXT_COLOR,
        fontFamily: Typography.FONT_NORMAL,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        lineHeight: 21,
        paddingBottom: 25,
    },
    

});

export default MyCodeForm;
