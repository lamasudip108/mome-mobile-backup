import React, {useState} from 'react';
import {TouchableOpacity, Text, ScrollView, View, Image, StyleSheet, StatusBar, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import AntIcon from 'react-native-vector-icons/AntDesign';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';

const screenHeight = Math.round(Dimensions.get('window').height);

const RequestQRCode = (props) => {

    const {navigation, route} = props;
    const amount = route?.params?.amount;

    let scanner;

    const [cameraTorch, setCameraTorch] = useState(false);

    const onSuccess = scanEvent => {
        navigation.navigate('RequestConfirmation', { result: scanEvent, amount });
    };

    const handleTorchToggle = () => {
        setCameraTorch(!cameraTorch);
    };

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.TERTIARY_BACKGROUND_COLOR}/>

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
                                <AntIcon name="close" size={25} color={Colors.QUATERNARY_TEXT_COLOR}/>
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.topContent}>
                        <Text style={styles.topText}>
                            {i18n.t('placeqr')}
                        </Text>
                    </View>

                    <View style={{ flex: 1, alignItems:'center', width: '100%', height: '100%'}}>
                        <QRCodeScanner
                            reactivate={true}
                            ref={(camera) => scanner = camera}
                            showMarker={true}
                            onRead={onSuccess}
                            flashMode={cameraTorch ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
                            topContent={
                                <Text style={styles.centerText} textAlign="center"></Text>
                            }
                            markerStyle={{
                                position: 'absolute',
                                top: '20%',
                                borderColor: Colors.DENARY_BORDER_COLOR,
                            }}
                        />
                    </View>

                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 90 : 40,
        width: '100%',
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
        marginLeft: 52,
        marginRight: 52,
    },
    topText: {
        color: Colors.QUATERNARY_TEXT_COLOR,
        fontFamily: Typography.FONT_NORMAL,
        textAlign: 'center',
        fontSize: Typography.FONT_SIZE_MEDIUM,
        lineHeight: 21,
        padding: 30,
    },
    centerText: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: Colors.QUATERNARY_TEXT_COLOR,
        fontFamily: Typography.FONT_NORMAL,
        textAlign: 'center',
    },
    bottomText: {
        color: Colors.QUINARY_TEXT_COLOR,
    },
});

export default RequestQRCode;
