import React from 'react';
import {Platform, Text, TextInput, View, Image, ScrollView, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {Button} from 'native-base';
import {useFormik} from 'formik';

import {CommonStyles, Colors, Typography} from '@/theme';

const screenHeight = Math.round(Dimensions.get('window').height);

const PayingToForm = (props) => {

    const {navigation, route, payment, loading, error, payBillAmount} = props;
    const QRData = route?.params?.result;

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: 'Test',
            description: 'This is test',
            amount: 200,
            notes: 'notes',
        },
        onSubmit: values => {
            values.id = 1;
            payBillAmount(values);
        },
    });

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.SECONDARY_BACKGROUND_COLOR}/>
                <View style={styles.header}></View>

                <View style={styles.body}>

                    <Text style={[styles.Text, styles.fontSize3, styles.lineHeight3]}>You are paying to:</Text>

                    <View style={styles.imageCircle}>
                        <Image source={require('@/assets/img/outlet.png')}/>
                    </View>

                    <Text style={[styles.Text, styles.fontSize4, styles.lineHeight4]}>{QRData.data}</Text>

                    <Text style={[styles.Text1, styles.fontSize2, styles.lineHeight2]}>Palm Jumeirah, Dubai, United Arab
                        Emirates</Text>

                    <View style={styles.billWrapper}>
                        <Text style={[styles.Text2, styles.fontSize2, styles.lineHeight2]}>BILL AMOUNT</Text>
                        <Text style={[styles.Text, styles.fontSize4, styles.lineHeight5]}>$ 250</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Purchase Note ( if Any)"
                            value={values.notes}
                            onChangeText={handleChange('notes')}
                            onBlur={handleBlur('notes')}
                            error={errors.notes}
                            touched={touched.notes}
                        />
                    </View>

                    <View style={styles.bottomWrapper}>
                        <View style={styles.bottomAction}>
                            <Button style={styles.cancelButton} onPress={() =>
                                navigation.navigate('Model', {
                                    screen: 'QRCode',
                                })}>
                                <Text style={styles.cancelButtonText}>CANCEL</Text>
                            </Button>
                            <Button style={styles.acceptButton} onPress={handleSubmit} disabled={!isValid}>
                                <Text style={styles.acceptButtonText}>ACCEPT</Text>
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
        ...CommonStyles.container,
        backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
    },
    header: {
        marginTop: Platform.OS === 'ios' ? 90 : 50,
        marginLeft: 32,
        marginRight: 32,
    },
    body: {
        marginTop: Platform.OS === 'ios' ? 90 : 40,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
        padding: 32,
        paddingTop: 40,
        height: '100%',
        alignItems: 'center',
    },
    billWrapper: {
        backgroundColor: 'rgba(247,249,251,0.80)',
        borderRadius: 6,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: '80%',
    },
    inputWrapper: {
        width: '80%',
        borderRadius: 4,
        borderColor: Colors.SENARY_TEXT_COLOR,
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
        fontSize: Typography.FONT_SIZE_SMALL,
    },
    fontSize2: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
    },
    fontSize3: {
        fontSize: Typography.FONT_SIZE_LARGE,
    },
    fontSize4: {
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE_PLUS,
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
        fontFamily: Typography.FONT_BOLD,
        color: Colors.QUATERNARY_TEXT_COLOR,
    },
    Text1: {
        fontFamily: Typography.FONT_NORMAL,
        color: 'rgba(20,21,30,0.40)',
    },
    Text2: {
        fontFamily: Typography.FONT_NORMAL,
        color: Colors.SECONDARY_TEXT_COLOR,
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
    bottomWrapper: {
        width: '100%',
        paddingTop: 30,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 20,

    },
    bottomAction: {
        marginTop: 15,
        marginLeft: 12,
        marginRight: 20,
        marginBottom: 5,
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    cancelButton: {
        width: '50%',
        borderRadius: 25,
        borderColor: Colors.TERTIARY_BORDER_COLOR,
        borderWidth: 2,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.SECONDARY_BUTTON_COLOR,
        marginRight: 5,
    },
    acceptButton: {
        width: '50%',
        borderRadius: 25,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY_BUTTON_COLOR,
        marginLeft: 5,
    },
    cancelButtonText: {
        color: Colors.SECONDARY_BUTTON_TEXT_COLOR,
        fontFamily: Typography.FONT_BOLD,
    },
    acceptButtonText: {
        color: Colors.PRIMARY_BUTTON_TEXT_COLOR,
        fontFamily: Typography.FONT_BOLD,
    },
});

export default PayingToForm;
