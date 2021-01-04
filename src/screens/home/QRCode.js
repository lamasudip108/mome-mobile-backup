import React from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet, StatusBar} from 'react-native';
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

            <View style={styles.content}>

            <View style={styles.meta}>
                <TouchableOpacity>
                    <Image style={{}} source={require('@/assets/img/light-off.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={() => navigation.goBack()}>
                        <AntIcon name="close" size={25} color="#212121"/>
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.topContent}>
                 <Text style={styles.topText}>
                    Place the QR code of shop to continue payment of your purchase made.
                </Text>
            </View>

            <View style={{ flex: 1, alignItems:'center'}}>
            <QRCodeScanner
                reactivate={true}
                ref={(camera) => scanner = camera}
                showMarker={true}
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.auto}
                topContent={
                    <Text style={styles.centerText} textAlign="center">
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity>
                        <Text style={styles.bottomText}>OK. Got it!</Text>
                    </TouchableOpacity>
                }
                markerStyle={{
                    position: 'absolute',
                    top: '20%',
                    borderColor: '#747E8F'
                }}
            />
            </View>

            </View>

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
    content: {
        marginTop: Platform.OS === 'ios' ? 60 : 30,
        //marginLeft: 32,
        //marginRight: 32,
        //width: '85%',
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 32,
        marginRight: 32,
    },
    topContent:{
        alignItems:'center',
        justifyContent: 'center',
        //width: '80%',
        marginLeft: 52,
        marginRight: 52,
    },
    topText: {
        color: '#212121',
        fontFamily: 'SFProDisplay-Regular',
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 21,
        padding: 30,
    },
    centerText: {
        //flex: 1,
        fontSize: 14,
        //padding: 32,
        color: '#212121',
        fontFamily: 'SFProDisplay-Regular',
        textAlign: 'center',
        //marginTop: Platform.OS === 'ios' ? 62 : 20,
        //marginRight: 64,
    },
    bottomText: {
        color: '#FFFFFF',
    },
});

export default QRCodeScreen;
