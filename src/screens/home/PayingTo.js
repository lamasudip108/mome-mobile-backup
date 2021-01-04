import React from 'react';
import {Platform, Text, TextInput, View, Image, ScrollView, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {Button} from 'native-base';

const screenHeight = Math.round(Dimensions.get('window').height);

const PayingToScreen = (props) => {

    const {navigation, route} = props;

    const QRData = route?.params?.result;

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#0000FF"/>
                <View style={styles.topContent}>


                </View>

                <View style={styles.content}>


                    <Text style={[styles.Text, styles.fontSize3, styles.lineHeight3]}>You are paying to:</Text>

                    <View style={styles.imageCircle}>
                        <Image source={require('@/assets/img/outlet.png')}/>
                    </View>

                    <Text style={[styles.Text, styles.fontSize4, styles.lineHeight4]}>{QRData.data}</Text>

                    <Text style={[styles.Text1, styles.fontSize2, styles.lineHeight2]}>Palm Jumeirah, Dubai, United Arab
                        Emirates</Text>

                    <View style={styles.billBlock}>
                        <Text style={[styles.Text2, styles.fontSize2, styles.lineHeight2]}>BILL AMOUNT</Text>
                        <Text style={[styles.Text, styles.fontSize4, styles.lineHeight5]}>$ 250</Text>
                    </View>

                    <View style={styles.inputBlock}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Purchase Note ( if Any)"
                        />
                    </View>

                    <View style={styles.termsBottom}>
                        <View style={styles.termsBottmBtn}>
                            <Button style={styles.cancelBtn} onPress={() =>
                                navigation.navigate('Model', {
                                    screen: 'QRCode',
                                })}>
                                <Text style={styles.cancelText}>CANCEL</Text>
                            </Button>
                            <Button style={styles.acceptBtn} onPress={() => handleSubmit()}>
                                <Text style={styles.acceptText}>ACCEPT</Text>
                            </Button>
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000FF',
    },
    topContent: {
        marginTop: Platform.OS === 'ios' ? 90 : 50,
        marginLeft: 32,
        marginRight: 32,
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 90 : 40,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        padding: 32,
        paddingTop: 40,
        height: '100%',
        alignItems: 'center',
    },
    billBlock: {
        backgroundColor: 'rgba(247,249,251,0.80)',
        borderRadius: 6,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '80%',
    },
    inputBlock: {
        width: '80%',
        borderRadius: 4,
        borderColor: '#F2F2F2',
        borderWidth: 1,
        height: 111,
        color: 'rgba(20,21,30,0.40)',
        padding: 15,
        paddingTop: 10,
    },
    TextInput: {
        maxHeight: 110,
    },
    viewBox: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    borderBottom: {
        borderBottomColor: 'rgba(20,21,30,0.40)',
        borderBottomWidth: 0.5,
    },
    fontSize1: {
        fontSize: 12,
    },
    fontSize2: {
        fontSize: 14,
    },
    fontSize3: {
        fontSize: 16,
    },
    fontSize4: {
        fontSize: 26,
    },
    lineHeight1: {
        lineHeight: 18,
    },
    lineHeight2: {
        lineHeight: 21,
    },
    lineHeight3: {
        lineHeight: 24,
    },
    lineHeight4: {
        lineHeight: 27,
    },
    lineHeight5: {
        lineHeight: 48,
    },
    Text: {
        fontFamily: 'SFProDisplay-Bold',
        color: '#212121',
    },
    Text1: {
        fontFamily: 'SFProDisplay-Regular',
        color: 'rgba(20,21,30,0.40)',
    },
    Text2: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#2B2D42',
    },
    imageCircle: {
        height: 124,
        width: 124,
        borderRadius: 62,
        borderColor: '#CBCFD365',
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewBtn: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    confirmBtn: {
        width: '100%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000FF',
    },
    confirmText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'SFProDisplay-Bold',
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    imageContent: {
        marginRight: 15,
    },
    termsBottom: {
        width: '100%',
        paddingTop: 30,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 20,

    },
    termsBottmBtn: {
        marginTop: 15,
        marginLeft: 12,
        marginRight: 20,
        marginBottom: 5,
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    cancelBtn: {
        width: '50%',
        borderRadius: 25,
        borderColor: '#0000FF',
        borderWidth: 2,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginRight: 5,
    },
    acceptBtn: {
        width: '50%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0000FF',
        marginLeft: 5,
    },
    cancelText: {
        color: '#0000FF',
        fontFamily: 'SFProDisplay-Bold',
    },
    acceptText: {
        color: '#FFFFFF',
        fontFamily: 'SFProDisplay-Bold',
    },
});

export default PayingToScreen;

