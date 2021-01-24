import React, {useEffect} from 'react';
import {FlatList, Platform, Text, View, ScrollView, Image, StatusBar, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';
import {getAsyncStorage} from '@/utils/storageUtil';
import {JWT_TOKEN} from '@/constants';
import {decodeUserID} from '@/utils/tokenUtil';
import Skeleton from '@/shared/skeleton';

const screenHeight = Math.round(Dimensions.get('window').height);

const MyBank = (props) => {

    const {navigation, banks, loading, error, fetchBanksByCustomerIdentifier} = props;

    useEffect(() => {
        const fetchCustomerBanksAsync = async () => {
            let token = await getAsyncStorage(JWT_TOKEN);
            let customerID = decodeUserID(token);
            fetchBanksByCustomerIdentifier(customerID);
        };
        fetchCustomerBanksAsync();

    }, []);

    const EmptyListMessage = ({item}) => {
        return (
            <View style={styles.emptyList}>
              <Text style={styles.emptyMessage}>{i18n.t('nodata')}</Text>  
            </View>
        );
    };

    const renderItem = ({item}) => (
        <View style={styles.listItem}>
            <View style={styles.circleListItem}>
                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
            </View>
            <Text style={styles.listName}>{item?.bank?.name}</Text>
        </View>
    );

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>

                <View style={styles.content}>
                    <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
                    <View style={styles.contentWrapper}>
                        <View style={styles.list}>
                            {
                                loading ? (
                                    Array.from({length: 3}).map((_, index) => (
                                        <Skeleton key={index}/>
                                    ))
                                ) 
                                : 
                                (<FlatList
                                    data={banks}
                                    renderItem={renderItem}
                                    keyExtractor={item => `${item.id}`}
                                    ListEmptyComponent={EmptyListMessage}
                                />)
                            }
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('AddBank')}>
                            <View style={styles.listItem} justifyContent="center">
                                <Text style={styles.text}>+ {i18n.t('addbank')}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 70 : 22,
    },
    circleImage: {
        width: 22,
        height: 24,
    },
    contentWrapper: {
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
        padding: 32,
        paddingTop: 20,
        height: '100%',
        marginTop: 10,
    },
    list: {
        ...CommonStyles.list,
        height: 400,
    },
    listItem: {
        ...CommonStyles.listItem,
        borderRadius: 6,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
        padding: 20,
        marginBottom: 10,
        justifyContent: 'flex-start',
    },
    circleListItem: {
        ...CommonStyles.circleListItem,
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
        height: 44,
        width: 44,
        borderRadius: 22,
        borderColor: Colors.SEPTENARY_BORDER_COLOR,
        marginRight: 15,
    },
    listName: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_NORMAL,
    },
    text: {
        fontFamily: Typography.FONT_NORMAL,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        lineHeight: 21,
        color: Colors.PRIMARY_TEXT_COLOR,
        padding: 9,
    },
    emptyList: {
        ...CommonStyles.emptyList,
        height: 300,
    },
    emptyMessage: {
        ...CommonStyles.emptyMessage,
    },

});

export default MyBank;
