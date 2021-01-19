import React from 'react';
import {
    I18nManager,
    Text,
    ScrollView,
    View,
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

const AmountToRequestSchema = Yup.object().shape({
    amount: Yup
        .string()
        .required('Amount is required.'),
});

const AmountToRequest = (props) => {

    const {direction} = useDirection();

    const {navigation} = props;

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
        validationSchema: AmountToRequestSchema,
        initialValues: {
            amount: '100',
        },
        onSubmit: values => {
            console.log('Values', values);
            navigation.navigate('RequestOptions', {values: values});
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
                    <View style={styles.amountWrapper}>
                        <View style={styles.amountList}>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '50' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBottom} onPress={() => handleAmountChange('50')}>
                                    <Text style={styles.amountText}>$50</Text>
                                </Button>
                            </View>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '100' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBottom} onPress={() => handleAmountChange('100')}>
                                    <Text style={styles.amountText}>$100</Text>
                                </Button>
                            </View>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '500' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBottom} onPress={() => handleAmountChange('500')}>
                                    <Text style={styles.amountText}>$500</Text>
                                </Button>
                            </View>
                            <View
                                style={[styles.amountListItem, styles.amountListItemRight, values.amount === '1000' ? styles.amountListItemFocus : styles.amountListItemNotFocus]}>
                                <Button style={styles.amountBottom} onPress={() => handleAmountChange('1000')}>
                                    <Text style={styles.amountText}>$1000</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={[styles.textWrapper, styles.borderBottom]}>
                            <Text style={styles.text3}>{i18n.t('tapselect')}</Text>
                        </View>

                        <View style={{alignItems: 'flex-start', justifyContent:'flex-start'}}>
                            <Text style={styles.text5}>{i18n.t('requesting')}</Text>
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
                                <Text style={styles.buttonText}>{i18n.t('next')}</Text>
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
    amountWrapper: {
        ...CommonStyles.amountWrapper,
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
        ...CommonStyles.amountList,
    },
    amountListItem: {
        ...CommonStyles.amountListItem,
    },
    amountListItemRight: {
        ...CommonStyles.amountListItemRight,
    },
    amountListItemFocus: {
        ...CommonStyles.amountListItemFocus,
    },
    amountListItemNotFocus: {
        ...CommonStyles.amountListItemNotFocus,
    },
    amountBottom: {
        ...CommonStyles.amountBottom,
    },
    amountText: {
        ...CommonStyles.amountText,
    },
    inputWrapper: {
        ...CommonStyles.inputWrapper,
    },
    textWrapper: {
        ...CommonStyles.textWrapper,
    },
    borderBottom: {
        ...CommonStyles.borderBottom,
    },
    text1: {
        ...CommonStyles.text,
    },
    text2: {
        ...CommonStyles.text2,
    },
    text3: {
        ...CommonStyles.text3,
    },
    text4: {
        ...CommonStyles.text4,
    },
    text5: {
        ...CommonStyles.text5,
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

export default AmountToRequest;
