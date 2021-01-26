import React, {useState, useEffect} from 'react';
import {
    I18nManager,
    Platform,
    FlatList,
    Text,
    View,
    Image,
    StatusBar,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Chip, Paragraph, Portal, Dialog} from 'react-native-paper';
import i18n from 'i18n-js';

import {useDirection} from '@/context/language';
import {CommonStyles, Typography, Colors} from '@/theme';
import SkeletonThreeColumn from '@/shared/skeleton/SkeletonThreeColumn';
import {getAsyncStorage} from '@/utils/storageUtil';
import {JWT_TOKEN} from '@/constants';
import {decodeUserID} from '@/utils/tokenUtil';

const screenHeight = Math.round(Dimensions.get('window').height);

const History = (props) => {

    const {direction} = useDirection();

    const {navigation, walletHistory, loading, error, fetchWalletHistoryByCustomerIdentifier, cleanCustomerWalletHistory} = props;

    const [history, setHistory] = useState([]);
    const [cancelDialogVisible, setCancelDialogVisible] = useState(false);
    const [payDialogVisible, setPayDialogVisible] = useState(false);

    const showCancelDialog = () => setCancelDialogVisible(true);
    const hideCancelDialog = () => setCancelDialogVisible(false);

    const showPayDialog = () => setPayDialogVisible(true);
    const hidePayDialog = () => setPayDialogVisible(false);

    const historyFilter = text => {
        const newData = walletHistory.filter(item => {
            const itemData = `${item.first_name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setHistory(newData);
    };

    useEffect(() => {
        const fetchCustomerWalletHistoryAsync = async () => {
            let token = await getAsyncStorage(JWT_TOKEN);
            let customerID = decodeUserID(token);
            fetchWalletHistoryByCustomerIdentifier(customerID);
        };
        fetchCustomerWalletHistoryAsync();

        return () => {
            cleanCustomerWalletHistory();
        };
    }, []);

    useEffect(() => {
        setHistory(walletHistory);
    }, [walletHistory]);

    const EmptyListMessage = () => {
        return (
            <View style={styles.emptyList}>
                <Text style={styles.emptyMessage}>{i18n.t('nodata')}</Text>
            </View>
        );
    };

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <View style={styles.itemInner}>
                <View style={styles.circleItem}>
                    <Image style={styles.circleImage} source={{uri: item.icon}}/>
                </View>
                <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Text style={styles.itemText}>$ {item.amount}</Text>
                        {
                            item.type === 'request' &&
                            <Chip style={styles.chipRequest} height={22}>Request</Chip>
                        }
                        {
                            item.type === 'send' &&
                            <Chip style={styles.chipSend} height={22}>Send</Chip>
                        }
                    </View>
                    <Text style={styles.itemDate}>3 October 2020, 10:45 AM</Text>
                    <Text style={[styles.itemStatus,item.status === 'completed' ? styles.itemComplete : styles.itemStatusBg]}>{item.status}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('HistoryDetail')}>
                        <Text style={styles.itemDetails}>DETAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {item.type === 'request' &&
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => showCancelDialog()}>
                        <MaterialCommunityIcons name="close-circle-outline" size={35} color={Colors.QUATERNARY_TEXT_COLOR}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showPayDialog()}>
                        <MaterialCommunityIcons name="check-circle-outline" size={35} color={Colors.PRIMARY_TEXT_COLOR}/>
                    </TouchableOpacity>

                    <Portal>
                        <Dialog visible={cancelDialogVisible} onDismiss={hideCancelDialog}>
                            <Dialog.Content>
                                <Paragraph>Are you sure you want to cancel?</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={hideCancelDialog}>No</Button>
                                <Button>Yes</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                    <Portal>
                        <Dialog visible={payDialogVisible} onDismiss={hidePayDialog}>
                            <Dialog.Content>
                                <Paragraph>Are you sure you want to pay?</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={hidePayDialog}>No</Button>
                                <Button>Yes</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                </View>
                }
            </View>
        </View>

    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
                <View style={styles.form}>
                    <View style={styles.searchWrapper}>
                        <TextInput style={styles.searchInput}
                                   useRef={'txtSearch'}
                                   placeholder={i18n.t('searchhistory')}
                                   underlineColorAndroid='transparent'
                                   onChangeText={text => historyFilter(text)}/>
                        <Icon name="search" size={14} color={Colors.QUADENARY_TEXT_COLOR} style={{marginRight: 15}}/>
                    </View>
                </View>

                <View style={styles.listWrapper}>
                    {
                        loading ? (
                                Array.from({length: 9}).map((_, index) => (
                                    <SkeletonThreeColumn key={index}/>
                                ))
                            )
                            :
                            (<FlatList
                                data={history}
                                renderItem={renderItem}
                                keyExtractor={item => `${item.id}`}
                                ListEmptyComponent={EmptyListMessage}
                            />)
                    }
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
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 32,
        marginRight: 32,
    },
    searchWrapper: {
        borderBottomColor: Colors.NONARY_BORDER_COLOR,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
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
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: Colors.SEPTENARY_BORDER_COLOR,
        marginRight: 15,
        marginLeft: Platform.OS === 'ios' ? 0 : 15,
    },
    circleImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    itemName: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_SEMI_BOLD,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    itemText: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_MEDIUM,
        color: Colors.SECONDARY_TEXT_COLOR,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    itemDate: {
        color: 'rgba(20,21,30,0.60)',
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        lineHeight: 18,
        fontFamily: Typography.FONT_NORMAL,
        marginLeft: 16,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    itemStatus: {
        marginLeft: 16,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        borderRadius: 3,
        padding: 3,
    },
    itemStatusBg: {
        borderWidth: 1,
        borderColor: Colors.OCTONARY_BORDER_COLOR,
        color: 'rgba(20,21,30,0.60)',
    },
    chipRequest: {
        margin: 3,
        backgroundColor: Colors.QUATERNARY_BACKGROUND_COLOR,
        alignItems: 'center',
    },
    chipSend: {
        margin: 3,
        backgroundColor: Colors.NONARY_BACKGROUND_COLOR,
        alignItems: 'center',
    },
    itemComplete:{
        backgroundColor:'rgba(25,96,2,0.20)',
        color: Colors.PRIMARY_SUCCESS_COLOR,
    },
    itemDetails: {
        marginLeft: 16,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        marginTop: 5,
        textDecorationLine: 'underline',
    },
    emptyList: {
        ...CommonStyles.emptyList,
        height: screenHeight / 2,
    },
    emptyMessage: {
        ...CommonStyles.emptyMessage,
    },
});

export default History;
