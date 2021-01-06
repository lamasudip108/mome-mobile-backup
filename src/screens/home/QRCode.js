import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet, StatusBar} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import AntIcon from 'react-native-vector-icons/AntDesign';

const QRCodeScreen = ({navigation}) => {

    let scanner;
    const [cameraTorch, setCameraTorch] = useState(false);

    const onSuccess = scanEvent => {
        navigation.navigate('PayingTo', {result: scanEvent});
    };

    const handleTorchToggle = () => {
        setCameraTorch(!cameraTorch);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"/>

            <View style={styles.content}>

                <View style={styles.meta}>
                    <TouchableOpacity onPress={() => handleTorchToggle()}>
                        {cameraTorch ?
                            <Image source={require('@/assets/img/light-on.png')}/> :
                            <Image source={require('@/assets/img/light-off.png')}/>
                        }
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

                <View style={{flex: 1, alignItems: 'center'}}>
                    <QRCodeScanner
                        reactivate={true}
                        ref={(camera) => scanner = camera}
                        showMarker={true}
                        onRead={onSuccess}
                        flashMode={cameraTorch ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                        topContent={
                            <Text style={styles.centerText} textAlign="center"></Text>
                        }
                        bottomContent={
                            <TouchableOpacity>
                                <Text style={styles.bottomText}>OK. Got it!</Text>
                            </TouchableOpacity>
                        }
                        markerStyle={{
                            position: 'absolute',
                            top: '20%',
                            borderColor: '#747E8F',
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
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 32,
        marginRight: 32,
    },
    topContent: {
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 14,
        color: '#212121',
        fontFamily: 'SFProDisplay-Regular',
        textAlign: 'center',
    },
    bottomText: {
        color: '#FFFFFF',
    },
});

export default QRCodeScreen;
