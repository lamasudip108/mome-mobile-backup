import React, {useState, useEffect} from 'react';
import {
    I18nManager,
    FlatList,
    Text,
    View,
    Image,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import i18n from 'i18n-js';

import {useDirection} from '@/context/language';
import {CommonStyles, Typography, Colors} from '@/theme';

const SelectBank = (props) => {

    const {direction} = useDirection();

    const {navigation, bankOptions, loading, error, fetchAllBanks} = props;

    const [banks, setBanks] = useState([]);

    // const bankOptions = [
    //     {id: '1', name: 'Qatar National Bank'},
    //     {id: '2', name: 'Abu Dubai Islamic Bank'},
    //     {id: '3', name: 'Arab Bank PLC'},
    //     {id: '4', name: 'Bank Melli Iran'},
    //     {id: '5', name: 'Abu Dubai Islamic Bank'},
    //     {id: '6', name: 'Arab Bank PLC'},
    //     {id: '7', name: 'Bank Melli Iran'},
    //     {id: '8', name: 'Arab Bank PLC'},
    //     {id: '9', name: 'Bank Melli Iran'},
    //     {id: '10', name: 'Bank Melli Iran'},
    // ];

    const bankFilter = text => {
        const newData = bankOptions.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setBanks(newData);
    };

    useEffect(() => {
        fetchAllBanks();
    }, []);

    useEffect(() => {
        setBanks(bankOptions);
    }, []);

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('AddBank', {item})}>
            <View style={styles.item}>
                <View style={styles.itemInner}>
                    <View style={styles.circleItem}>
                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                    </View>
                    <Text style={styles.itemName}>{item.name}</Text>
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
    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
                <View style={styles.form}>
                    <View style={styles.searchWrapper}>
                        <TextInput style={styles.searchInput}
                                   useRef={'txtSearch'}
                                   placeholder={i18n.t('search')}
                                   underlineColorAndroid='transparent'
                                   onChangeText={text => bankFilter(text)}/>
                        <Icon name="search" size={14} color={Colors.QUADENARY_TEXT_COLOR} style={{marginRight: 15}}/>
                    </View>
                </View>

                <View style={styles.listWrapper}>
                    <FlatList
                        data={banks}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 80 : 22,
    },
    form:{
        flexDirection: 'row',
        marginTop:30,
        marginLeft: 32,
        marginRight: 32,
    },
    searchWrapper: {
        borderBottomColor: Colors.NONARY_BORDER_COLOR,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        shadowColor: '#A9A9A933',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    searchInput: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: Colors.SENARY_BORDER_COLOR,
        flex: 1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    listWrapper: {
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
        padding: 32,
        paddingTop: 20,
        height: '100%',
    },
    item: {
         ...CommonStyles.listItem,
        borderRadius: 6,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
        padding: 20,
        marginBottom: 10,
    },
    itemInner: {
        ...CommonStyles.listItemInner,
    },
    circleItem: {
        ...CommonStyles.circleListItem,
        backgroundColor:Colors.OCTONARY_BACKGROUND_COLOR,
        height:44,
        width: 44,
        borderRadius: 22,
        borderColor: Colors.SEPTENARY_BORDER_COLOR,
        marginRight: 15,
        marginLeft: Platform.OS === 'ios' ? 0 : 15,
    },
    itemName: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_NORMAL,
    },
});

export default SelectBank;
