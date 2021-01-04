import React from 'react';
import {Text, View, Image, StatusBar, StyleSheet} from 'react-native';
import {Button} from 'native-base';

const PayingSuccess = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>
            <Image source={require('@/assets/img/success.png')}/>
            <Text style={styles.successHeading}>Payment success!</Text>
            <View style={{width:'60%'}}>
                <Text style={styles.successHeading1}>You have successfully paid your bill amount.</Text>
            </View>
            <View style={styles.viewBtn}>
                <Button style={styles.updateBtn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.updateText}>GO TO DASHBOARD</Text>
                </Button>
            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successHeading:{
        color: '#212121',
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: 22,
        lineHeight: 36,
        marginTop: 15,
    },
    successHeading1:{
        color: '#747E8F',
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 5,
        marginBottom: 15,
        textAlign: 'center',
    },
    viewBtn: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    updateBtn: {
        width: '100%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000FF',
    },
    updateText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'SFProDisplay-Bold',
    },

});

export default PayingSuccess;
