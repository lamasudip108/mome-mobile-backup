import React, {useEffect} from 'react';
import {
    I18nManager,
    FlatList,
    Platform,
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    YellowBox,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import i18n from 'i18n-js';

import {CommonStyles, Colors, Typography} from '@/theme';
import {getAsyncStorage} from '@/utils/storageUtil';
import {JWT_TOKEN} from '@/constants';
import {decodeUserID} from '@/utils/tokenUtil';
import SkeletonThreeColumn from '@/shared/skeleton/SkeletonThreeColumn';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

const screenHeight = Math.round(Dimensions.get('window').height);

const Transaction = (props) => {

    const {navigation, profile, transactions, loading, error, fetchTransactionByCustomerIdentifier, cleanCustomerTransaction} = props;

    useEffect(() => {
        const fetchCustomerTransactionAsync = async () => {
            let token = await getAsyncStorage(JWT_TOKEN);
            let customerID = decodeUserID(token);
            fetchTransactionByCustomerIdentifier(customerID);
        };
        fetchCustomerTransactionAsync();

        return () => {
            cleanCustomerTransaction();
        };
    }, []);

    const EmptyListMessage = ({item}) => {
        return (
            <View style={[styles.emptyList, transactions?.[0] ? styles.todayEmptyListHeight : styles.yesterdayEmptyListHeight]}>
              <Text style={styles.emptyMessage}>{i18n.t('nodata')}</Text>
            </View>
        );
    };

    const renderItem = ({item}) => (
        <View style={styles.listItem}>
            <View style={styles.circleListItem}>
                <Ionicons name={'receipt-outline'} size={25} color={Colors.PRIMARY_TEXT_COLOR} />
            </View>
            <View style={styles.listInfo}>
                <Text style={styles.listName}>{item.vendor_name}</Text>
                <Text style={styles.listDate}>{item.created_at}</Text>
            </View>
            <Text style={styles.listAmount}>${item.amount}</Text>
        </View>
     );

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>

                <View style={styles.topContent}>

                    <View style={styles.transactionsSummary}>
                        <View style={styles.transactionsSummaryWrapper}>
                            <TouchableOpacity style={styles.circleTransactionsSummary}
                                              onPress={() => navigation.navigate('Transaction')}>
                                <Ionicons name={'receipt-outline'} size={25} color={Colors.PRIMARY_TEXT_COLOR} />
                            </TouchableOpacity>
                            <Text style={styles.transactionsSummaryNumber}>250</Text>
                            <Text style={styles.transactionsSummaryText}>{i18n.t('transaction')}</Text>
                        </View>

                        <View style={{marginLeft: 20}}></View>

                        <View style={styles.transactionsSummaryWrapper}>
                            <TouchableOpacity style={styles.circleTransactionsSummary}
                                              onPress={() => navigation.navigate('Transaction')}>
                                <Ionicons name={'cart-outline'} size={30} color={Colors.PRIMARY_TEXT_COLOR} />
                            </TouchableOpacity>
                            <Text style={styles.transactionsSummaryNumber}>${profile?.total_purchase}</Text>
                            <Text style={styles.transactionsSummaryText}>{i18n.t('total')}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.middleContent}>
                    <View style={styles.middleContentHeading}>
                        <Text style={styles.middleContentText}>{i18n.t('today')}</Text>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.filter}>{i18n.t('filter')}</Text>
                            <Ionicons name={'filter-outline'} size={15} color={Colors.PRIMARY_TEXT_COLOR} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.list, styles.todayHeight]}>
                        {
                            loading ? (
                                Array.from({length: 2}).map((_, index) => (
                                    <SkeletonThreeColumn key={index}/>
                                ))
                            )
                            :
                            (<FlatList
                                data={transactions?.[0]}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                ListEmptyComponent={EmptyListMessage}
                            />)

                        }
                    </View>

                    <View style={{paddingTop: 5}}>
                        <View style={styles.middleContentHeading}>
                            <Text style={styles.middleContentText}>{i18n.t('yesterday')}</Text>
                        </View>
                        <View style={[styles.list, styles.yesterdayHeight]}>
                            {
                                loading ? (
                                    Array.from({length: 2}).map((_, index) => (
                                        <SkeletonThreeColumn key={index}/>
                                    ))
                                )
                                :
                                (<FlatList
                                    data={transactions?.[1]}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                    ListEmptyComponent={EmptyListMessage}
                                />)

                            }
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
    topContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? 90 : 40,
        marginLeft: 32,
        marginRight: 32,
    },
    transactionsSummary: {
        flexDirection: 'row',
        paddingTop: 44,
        paddingBottom: 0,
        marginRight: 10,
        paddingRight: 32,
    },
    transactionsSummaryWrapper: {
        width: '50%',
        borderRadius: 6,
        height: 152,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
    },
    circleTransactionsSummary: {
        ...CommonStyles.circleListItem,
        backgroundColor: 'rgba(210,212,252,0.50)',
        borderColor: 'rgba(210,212,252,0.50)',
        marginBottom: 5,
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    transactionsSummaryNumber: {
        color: Colors.SEPTENARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE_PLUS,
        fontFamily: Typography.FONT_BOLD,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 8,
        lineHeight: 27,
    },
    transactionsSummaryText: {
        fontFamily: Typography.FONT_MEDIUM,
        color: 'rgba(20,21,30,0.40)',
        fontSize: Typography.FONT_SIZE_TINY,
        lineHeight: 18,
    },
    circleImage: {
        width: 34,
        height: 28,
    },
    middleContent: {
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderColor: Colors.QUINARY_BORDER_COLOR,
        borderWidth: 1,
        padding: 32,
        paddingTop: 20,
        height: '100%',
        marginTop: 10,
    },
    middleContentHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    middleContentText: {
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: 'rgba(20,21,30,0.40)',
        lineHeight: 18,
    },
    filter: {
        color: Colors.PRIMARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        fontFamily: Typography.FONT_SEMI_BOLD,
        lineHeight: 18,
        paddingRight: 2,
    },
    todayHeight: {
        height: 230,
    },
    yesterdayHeight: {
        height: Platform.OS === 'ios' ? 230 : 200,
    },
    list: {
        ...CommonStyles.list,
    },
    listItem: {
        ...CommonStyles.listItem,
        borderRadius: 6,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
        alignItems: 'center',
        padding: 20,
        marginBottom: 10,
    },
    itemInner: {
        ...CommonStyles.listItemInner,
    },
    circleListItem: {
        ...CommonStyles.circleListItem,
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
        borderColor: Colors.SEPTENARY_BORDER_COLOR,
        marginBottom: 5,
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    listInfo: {
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    listName: {
        ...CommonStyles.listName,
        marginLeft: 20,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    listDate: {
        color: 'rgba(20,21,30,0.60)',
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        lineHeight: 18,
        fontFamily: Typography.FONT_NORMAL,
        marginLeft: 20,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    listAmount: {
        color: Colors.OCTONARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
        lineHeight: 21,
    },
    emptyList: {
        ...CommonStyles.emptyList,
    },
    emptyMessage: {
        ...CommonStyles.emptyMessage,
    },
    todayEmptyListHeight: {
        height: 230,
    },
    yesterdayEmptyListHeight: {
        height: Platform.OS === 'ios' ? 200 : 120,
    },

});

export default Transaction;
