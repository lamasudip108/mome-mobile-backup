import React from 'react';
import {Text, View, Image, StatusBar, StyleSheet} from 'react-native';
import {Button} from 'native-base';

import {CommonStyles, Colors, Typography} from '@/theme';

const PayingSuccess = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            <Image source={require('@/assets/img/success.png')}/>
            <Text style={styles.successText1}>Payment success!</Text>
            <View style={{width:'60%'}}>
                <Text style={styles.successText2}>You have successfully paid your bill amount.</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Button style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>GO TO DASHBOARD</Text>
                </Button>
            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successText1:{
        color: Colors.QUATERNARY_TEXT_COLOR,
        fontFamily: Typography.FONT_SEMI_BOLD,
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE_MINUS,
        lineHeight: 36,
        marginTop: 15,
    },
    successText2:{
        color: Colors.TERTIARY_TEXT_COLOR,
        fontFamily: Typography.FONT_NORMAL,
        fontSize: Typography.FONT_SIZE_LARGE,
        lineHeight: 24,
        marginTop: 5,
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonWrapper: {
        ...CommonStyles.buttonWrapper,
    },
    button: {
        ...CommonStyles.button,
        height: 56,
    },
    buttonText: {
        ...CommonStyles.buttonText,
    },
});

export default PayingSuccess;
