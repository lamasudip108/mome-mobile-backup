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
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import i18n from 'i18n-js';

import {useDirection} from '@/context/language';
import {CommonStyles, Typography, Colors} from '@/theme';
import {getAsyncStorage} from '@/utils/storageUtil';
import {JWT_TOKEN} from '@/constants';
import {decodeUserID} from '@/utils/tokenUtil';
import Skeleton from '@/shared/skeleton';

const SelectMyBank = (props) => {

    const {direction} = useDirection();

    const {navigation, bankOptions, loading, error, fetchBanksByCustomerIdentifier, cleanCustomerBanks} = props;

    const [banks, setBanks] = useState([]);

    const bankFilter = text => {
        const newData = bankOptions.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setBanks(newData);
    };

    useEffect(() => {
        const fetchCustomerBanksAsync = async () => {
            let token = await getAsyncStorage(JWT_TOKEN);
            let customerID = decodeUserID(token);
            fetchBanksByCustomerIdentifier(customerID);
        };
        fetchCustomerBanksAsync();

        return () => {
            cleanCustomerBanks();
        };
    }, []);


    useEffect(() => {
        setBanks(bankOptions);
    }, [bankOptions]);

    const renderSkeletonItem = () => (
        <Skeleton />
    );

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('LoadMoney', {item})}>
            <View style={styles.item}>
                <View style={styles.itemInner}>
                    <View style={styles.circleItem}>
                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                    </View>
                    <Text style={styles.itemName}>{item?.bank?.name}</Text>
                </View>
                <View>
                    {direction === 'ltr' &&
                    <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR}/>
                    }
                    {direction === 'rtl' &&
                    <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR}/>
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
                        renderItem={loading ? renderSkeletonItem : renderItem}
                        keyExtractor={item => `${item.id}`}
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
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
        height: 44,
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

export default SelectMyBank;
