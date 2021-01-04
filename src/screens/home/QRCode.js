import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, StatusBar} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import AntIcon from 'react-native-vector-icons/AntDesign';

const QRCodeScreen = ({navigation}) => {

    let scanner;

    const onSuccess = scanEvent => {
        navigation.navigate('PayingTo', { result: scanEvent });
        console.log('QR::::', scanEvent);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>

            <View style={styles.meta}>
                <TouchableOpacity>
                    <Text onPress={() => navigation.goBack()}>
                        <AntIcon name="close" size={25} color="#212121"/>
                    </Text>
                </TouchableOpacity>
            </View>

            <QRCodeScanner
                reactivate={true}
                ref={(camera) => scanner = camera}
                showMarker={true}
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.auto}
                topContent={
                    <Text style={styles.centerText}>
                        Place the QR code of shop to continue payment of your purchase made
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity>
                        <Text>OK. Got it!</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
});

export default QRCodeScreen;
