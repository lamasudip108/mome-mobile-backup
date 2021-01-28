import  React from 'react';
import {
    I18nManager,
    Platform,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import i18n from 'i18n-js';

import {useDirection} from '@/context/language';
import {CommonStyles, Colors, Typography} from '@/theme';

const screenHeight = Math.round(Dimensions.get('window').height);

const Setting = ({navigation}) => {

    const {direction} = useDirection();

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
                <View style={styles.header}>
                    <Text style={styles.headingText}>{i18n.t('accountsetting')}</Text>
                </View>

                <View style={styles.List}>
                    <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <View style={styles.roundedWrapper} backgroundColor={Colors.QUINARY_BACKGROUND_COLOR}>
                                    <MaterialIcons name="lock" size={20} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.listName}>{i18n.t('change')}</Text>
                            </View>
                            <View>
                                {direction === 'ltr' &&
                                <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                                {direction === 'rtl' &&
                                <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <View style={styles.roundedWrapper} backgroundColor={Colors.SENARY_BACKGROUND_COLOR}>
                                    <MaterialIcons name="notifications" size={20} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.listName}>{i18n.t('appnotification')}</Text>
                            </View>
                            <View>
                                {direction === 'ltr' &&
                                <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                                {direction === 'rtl' &&
                                <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <View style={styles.roundedWrapper} backgroundColor={Colors.SEPTENARY_BACKGROUND_COLOR}>
                                    <MaterialIcons name="important-devices" size={20} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.listName}>Device Management</Text>
                            </View>
                            <View>
                                {direction === 'ltr' &&
                                <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                                {direction === 'rtl' &&
                                <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>  
                </View>

                <View style={{
                    marginTop: 15,
                    marginLeft: 32,
                    marginRight: 32,
                    paddingBottom: 10,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}>
                    <Text style={styles.headingText}>{i18n.t('securitysetting')}</Text>
                </View>

                <View style={styles.List}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <View style={styles.roundedWrapper} backgroundColor={Colors.QUINARY_BACKGROUND_COLOR}>
                                    <MaterialIcons name="fingerprint" size={22} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.listName}>Fingerprint Login</Text>
                            </View>
                            <View>
                                {direction === 'ltr' &&
                                <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                                {direction === 'rtl' &&
                                <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: 15,
                    marginLeft: 32,
                    marginRight: 32,
                    paddingBottom: 10,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}>
                    <Text style={styles.headingText}>{i18n.t('appsetting')}</Text>
                </View>

                <View style={styles.List}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <View style={styles.roundedWrapper} backgroundColor={Colors.QUINARY_BACKGROUND_COLOR}>
                                    <MaterialIcons name="system-update-alt" size={20} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.listName}>Check for update</Text>
                            </View>
                            <View>
                                {direction === 'ltr' &&
                                <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                                {direction === 'rtl' &&
                                <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },
    header: {
        ...CommonStyles.header,
        marginTop: Platform.OS === 'ios' ? 100 : 52,
        width: '100%',
        marginLeft: 32,
        marginRight: 32,
    },
    headingText: {
        ...CommonStyles.headingText2,
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: 'rgba(20,21,30,0.40)',
        marginBottom: 2,
        lineHeight: 18,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    list: {
        ...CommonStyles.list,
        width: '100%',
    },
    listItem: {
        ...CommonStyles.listItem,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 32,
        paddingRight: 32,
        marginBottom: 1,
    },
    listItemInner: {
        ...CommonStyles.listItemInner,
    },
    roundedWrapper: {
        ...CommonStyles.roundedWrapper,
    },
    listName: {
        ...CommonStyles.listName,
    },

});

export default Setting;


