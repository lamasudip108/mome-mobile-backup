import React, {useEffect, useState} from 'react';
import {
    I18nManager,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import i18n from 'i18n-js';

import {CommonStyles, Typography, Colors} from '@/theme';
import {useDirection} from '@/context/language';

export const data = [
    {id: 1, icon: 'https://bootdey.com/img/Content/avatar/avatar1.png', first_name: 'Abdul', last_name: 'Bari'},
    {id: 2, icon: 'https://bootdey.com/img/Content/avatar/avatar2.png', first_name: 'Abdul', last_name: 'Basit'},
    {id: 3, icon: 'https://bootdey.com/img/Content/avatar/avatar3.png', first_name: 'Abdul', last_name: 'Fattah'},
    {id: 4, icon: 'https://bootdey.com/img/Content/avatar/avatar4.png', first_name: 'Abdul', last_name: 'Ghaffar'},
    {id: 5, icon: 'https://bootdey.com/img/Content/avatar/avatar5.png', first_name: 'Abdul', last_name: 'Bari'},
    {id: 6, icon: 'https://bootdey.com/img/Content/avatar/avatar6.png', first_name: 'Abdul', last_name: 'Basit'},
    {id: 7, icon: 'https://bootdey.com/img/Content/avatar/avatar1.png', first_name: 'Abdul', last_name: 'Fattah'},
    {id: 8, icon: 'https://bootdey.com/img/Content/avatar/avatar2.png', first_name: 'Abdul', last_name: 'Ghaffar'},
    {id: 9, icon: 'https://bootdey.com/img/Content/avatar/avatar3.png', first_name: 'Abdul', last_name: 'Bari'},
];

const RequestContact = (props) => {

    const {navigation, route, contacts, loading, error, fetchAllContacts} = props;
    const amount = route?.params?.amount;

    const {direction} = useDirection();

    const [text, setText] = useState('');

    useEffect(() => {
        fetchAllContacts();
    }, []);

    return (

        <View style={styles.container}>

            <View style={styles.form}>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInput}
                               useRef={'txtSearch'}
                               placeholder={i18n.t('searchcontact')}
                               underlineColorAndroid='transparent'
                               onChangeText={text => setText(text)}/>
                    <Icon name="search" size={14} color={Colors.QUADENARY_TEXT_COLOR} style={{marginRight: 15}}/>
                </View>
            </View>

            <View style={{marginLeft: 32, marginRight: 32}}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled={true}
                    style={styles.horizontalList}
                    data={data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={styles.horizontalItem}
                                              onPress={() => navigation.navigate('SendConfirmation', {
                                                  result: {
                                                      customerID: item.id,
                                                      first_name: item?.first_name,
                                                      last_name: item?.last_name,
                                                      email: item?.email,
                                                      phone: item?.phone,
                                                  }, amount,
                                              })}>
                                <View style={styles.horizontalCircle}>
                                    <MaterialIcons name="person" size={50} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.horizontalName}>{item.first_name} {item.last_name}</Text>
                            </TouchableOpacity>
                        );
                    }}/>
            </View>

            <View style={styles.header}>
                <Text style={styles.headingText}>{i18n.t('selectcontacts')}</Text>
            </View>
            <FlatList
                style={styles.verticalList}
                data={data}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SendConfirmation', {
                            result: {
                                customerID: item.id,
                                first_name: item?.first_name,
                                last_name: item?.last_name,
                                email: item?.email,
                                phone: item?.phone,
                            }, amount,
                        })}>
                            <View style={styles.cardWrapper}>
                                <View style={styles.cardImage}>
                                    <MaterialIcons name="person" size={30} color={Colors.SEPTENARY_TEXT_COLOR} />
                                </View>
                                <Text style={styles.cardName}>{item.first_name} {item.last_name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}/>

            {/*<View style={styles.bottom}>*/}
                {/*<TouchableOpacity style={styles.bottomWrapper}*/}
                                  {/*onPress={() => navigation.navigate('SendConfirmation')}>*/}
                    {/*<MaterialIcons name="person-add-alt" size={23} color={Colors.SECONDARY_BACKGROUND_COLOR}/>*/}
                    {/*<Text style={styles.bottomText}>{i18n.t('invite')}</Text>*/}
                {/*</TouchableOpacity>*/}
            {/*</View>*/}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        paddingTop: Platform.OS === 'ios' ? 90 : 40,
    },
    form: {
        ...CommonStyles.form,
    },
    searchWrapper: {
        ...CommonStyles.searchWrapper,
    },
    searchInput: {
        ...CommonStyles.searchInput,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    horizontalList: {
        flexDirection: 'row',
        marginTop: 20,
    },
    horizontalItem: {
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalCircle: {
        backgroundColor: 'rgba(210,212,252,0.50)',
        height: 56,
        width: 56,
        borderRadius: 28,
        borderColor: 'rgba(210,212,252,0.50)',
        borderWidth: 1,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalImage: {
        height: 56,
        width: 56,
        borderRadius: 28,
    },
    horizontalName: {
        fontSize: Typography.FONT_SIZE_LARGE16,
        color: Colors.QUATERNARY_TEXT_COLOR,
        fontFamily: Typography.FONT_MEDIUM,
        paddingTop: 7,
    },
    header: {
        marginLeft: 32,
        marginRight: 32,
        marginTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    headingText: {
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: 'rgba(20,21,30,0.40)',
        lineHeight: 18,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    verticalList: {
        marginTop: 10,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 32,
        marginRight: 32,
        borderRadius: 6,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        shadowColor: '#A9A9A90F',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 6,
    },
    card: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderBottomColor: Colors.SENARY_TEXT_COLOR,
        borderBottomWidth: 1,
    },
    cardWrapper: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    cardImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(210,212,252,0.50)',
        borderColor: 'rgba(210,212,252,0.50)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardName: {
        fontFamily: Typography.FONT_MEDIUM,
        fontSize: Typography.FONT_SIZE_LARGE,
        color: Colors.QUATERNARY_TEXT_COLOR,
        lineHeight: 27,
        marginLeft: 15,
        alignSelf: 'center',
    },
    bottom: {
        height: 69,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        paddingTop: 20,
        paddingLeft: 22,
        paddingRight: 22,
        paddingBottom: 30,
        shadowColor: '#A9A9A91A',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 32,
        marginRight: 32,
        marginBottom: 32,
    },
    bottomWrapper: {
        flexDirection: 'row',
    },
    bottomText: {
        paddingTop: 2,
        marginLeft: 10,
        color: Colors.PRIMARY_TEXT_COLOR,
        fontFamily: Typography.FONT_MEDIUM,
        fontSize: Typography.FONT_SIZE_LARGE,
    },
});

export default RequestContact;

