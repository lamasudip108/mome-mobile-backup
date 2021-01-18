import React from 'react';
import {
    I18nManager,
    Text,
    ScrollView,
    View,
    Image,
    StatusBar,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {Button} from 'native-base';
import TextInput from '@/shared/form/TextInput';

import {useDirection} from '@/context/language';
import {CommonStyles, Typography, Colors} from '@/theme';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import i18n from 'i18n-js';

const screenHeight = Math.round(Dimensions.get('window').height);

const loadMoneySchema = Yup.object().shape({
    amount: Yup
        .string()
        .required('Amount is required.'),
});

const LoadMoney = (props) => {

    const {direction} = useDirection();

    const {navigation, route} = props;

    const selectedItem = route?.params?.item;

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
        isValid,
    } = useFormik({
        enableReinitialize: true,
        validationSchema: loadMoneySchema,
        initialValues: {
            amount: '100',
        },
        onSubmit: values => {
            console.log('Values', values);
        },
    });

    const handleAmountChange = (amount) => {
        setFieldValue('amount', amount);
    };

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.SECONDARY_BACKGROUND_COLOR}/>
                <View style={styles.content}>
                    <View style={styles.middleContent}>
                        <View style={styles.itemInner}>
                            <View style={styles.circleItem}>
                                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                            </View>
                            <Text style={styles.itemName}>{selectedItem?.bank?.name}</Text>
                        </View>
                        <View style={styles.amountList}>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '50' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBtn} onPress={() => handleAmountChange('50')}>
                                    <Text style={styles.amountText}>$50</Text>
                                </Button>
                            </View>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '100' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBtn} onPress={() => handleAmountChange('100')}>
                                    <Text style={styles.amountText}>$100</Text>
                                </Button>
                            </View>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '500' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBtn} onPress={() => handleAmountChange('500')}>
                                    <Text style={styles.amountText}>$500</Text>
                                </Button>
                            </View>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '1000' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBtn} onPress={() => handleAmountChange('1000')}>
                                    <Text style={styles.amountText}>$1000</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={[styles.textWrapper, styles.borderBottom]}>
                            <Text style={styles.Text3}>{i18n.t('tapselect')}</Text>
                        </View>

                        <View style={{alignItems: 'flex-start', justifyContent:'flex-start'}}>
                            <Text style={styles.Text5}>{i18n.t('enteramount')}</Text>
                        </View>
                        <TextInput
                            keyboardType="numeric"
                            value={values.amount}
                            onChangeText={handleChange('amount')}
                            onBlur={handleBlur('amount')}
                            error={errors.amount}
                            touched={touched.amount}

                        />
                        <View style={styles.buttonWrapper}>
                            <Button style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                                <Text style={styles.buttonText}>{i18n.t('loadfund')}</Text>
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
    content: {
        marginTop: Platform.OS === 'ios' ? 120 : 90,
    },
    middleContent: {
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderColor: Colors.QUINARY_BORDER_COLOR,
        borderWidth: 1,
        padding: 42,
        paddingTop: 20,
        height: '100%',
        width: '100%',
        marginTop: Platform.OS === 'ios' ? 100 : 60,
    },
    itemInner: {
        ...CommonStyles.listItemInner,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    circleItem: {
        ...CommonStyles.circleListItem,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: Colors.TERTIARY_BACKGROUND_COLOR,
        marginRight: 15,
        marginLeft: Platform.OS === 'ios' ? 0 : 15,
    },
    itemName: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_BOLD,
    },
    amountList: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    amountListItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountListItemRight: {
        marginRight: 9,
    },
    amountListItemFocus: {
        borderColor: Colors.TERTIARY_BORDER_COLOR,
        borderWidth: 2,
        borderRadius: 6,
    },
    amountListItemNotFocus: {
        borderColor: 'rgba(210,212,252,0.50)',
        borderWidth: 2,
        borderRadius: 6,
    },
    amountBtn: {
        height: 39,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(210,212,252,0.50)',
        padding: 5,
    },
    amountText: {
        color: Colors.PRIMARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
    },
    inputWrapper: {
        backgroundColor: 'rgba(255,255,255,0.90)',
        borderRadius: 25,
        borderColor: 'rgba(20,21,30,0.40)',
        borderWidth: 1,
        //padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        height: 56,
    },
    textWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    },
    borderBottom: {
        borderBottomColor: 'rgba(20,21,30,0.40)',
        borderBottomWidth: 0.5,
    },
    Text: {
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: 'rgba(20,21,30,0.40)',
        lineHeight: 18,
    },
    Text1: {
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE,
        fontFamily: Typography.FONT_MEDIUM,
        color: Colors.QUATERNARY_TEXT_COLOR,
        lineHeight: 27,
    },
    Text3: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_NORMAL,
        color: Colors.TERTIARY_TEXT_COLOR,
        lineHeight: 27,
    },
    Text4: {
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE_PLUS,
        fontFamily: Typography.FONT_BOLD,
        color: Colors.QUATERNARY_TEXT_COLOR,
        padding: 10,
    },
    Text5: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
        color: Colors.TERTIARY_TEXT_COLOR,
        lineHeight: 27,
        marginTop: 15,
        marginLeft: 15,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    buttonWrapper: {
        ...CommonStyles.buttonWrapper,
        width: 'auto',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    button: {
        ...CommonStyles.button,
        height: 56,
    },
    buttonText: {
        ...CommonStyles.buttonText,
        fontFamily: Typography.FONT_BOLD,
    },
});

export default LoadMoney;
