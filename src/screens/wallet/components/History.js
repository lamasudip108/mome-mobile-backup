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

const screenHeight = Math.round(Dimensions.get('window').height);

const History = (props) => {

    const {direction} = useDirection();

    const {navigation, loading, error} = props;

    const [history, setHistory] = useState([]);
    const [cancelDialogVisible, setCancelDialogVisible] = useState(false);
    const [payDialogVisible, setPayDialogVisible] = useState(false);

    const showCancelDialog = () => setCancelDialogVisible(true);
    const hideCancelDialog = () => setCancelDialogVisible(false);

    const showPayDialog = () => setPayDialogVisible(true);
    const hidePayDialog = () => setPayDialogVisible(false);

    const historyOptions = [
        {
            id: 1,
            icon: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            first_name: 'Abdul',
            last_name: 'Bari',
            type: 'request',
            amount: '100',
        },
        {
            id: 2,
            icon: 'https://bootdey.com/img/Content/avatar/avatar2.png',
            first_name: 'Abdul',
            last_name: 'Basit',
            type: 'request',
            amount: '1000',
        },
        {
            id: 3,
            icon: 'https://bootdey.com/img/Content/avatar/avatar3.png',
            first_name: 'Abdul',
            last_name: 'Fattah',
            type: 'send',
            amount: '500',
        },
        {
            id: 4,
            icon: 'https://bootdey.com/img/Content/avatar/avatar4.png',
            first_name: 'Abdul',
            last_name: 'Ghaffar',
            type: 'request',
            amount: '50',
        },
        {
            id: 5,
            icon: 'https://bootdey.com/img/Content/avatar/avatar5.png',
            first_name: 'Abdul',
            last_name: 'Bari',
            type: 'send',
            amount: '100',
        },
        {
            id: 6,
            icon: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            first_name: 'Abdul',
            last_name: 'Basit',
            type: 'send',
            amount: '1000',
        },
        {
            id: 7,
            icon: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            first_name: 'Abdul',
            last_name: 'Fattah',
            type: 'request',
            amount: '500',
        },
        {
            id: 8,
            icon: 'https://bootdey.com/img/Content/avatar/avatar2.png',
            first_name: 'Abdul',
            last_name: 'Ghaffar',
            type: 'send',
            amount: '50',
        },
        {
            id: 9,
            icon: 'https://bootdey.com/img/Content/avatar/avatar3.png',
            first_name: 'Abdul',
            last_name: 'Bari',
            type: 'send',
            amount: '100',
        },
    ];

    const historyFilter = text => {
        const newData = historyOptions.filter(item => {
            const itemData = `${item.first_name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setHistory(newData);
    };

    useEffect(() => {
        setHistory(historyOptions);
    }, []);

    const EmptyListMessage = ({item}) => {
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
                    <Text style={styles.itemText}>$ {item.amount} <Chip>Send</Chip></Text>
                    <Text style={styles.itemDate}>3 October 2020, 10:45 AM</Text>
                </View>
            </View>
            <View>
                {item.type === 'request' &&
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => showCancelDialog()}>
                        <MaterialCommunityIcons name="close-circle-outline" size={25} color={Colors.QUATERNARY_TEXT_COLOR}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showPayDialog()}>
                        <MaterialCommunityIcons name="check-circle-outline" size={25} color={Colors.PRIMARY_TEXT_COLOR}/>
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
                                   onChangeText={text => setHistory(text)}/>
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
                                //ListEmptyComponent={EmptyListMessage}
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
    emptyList: {
        ...CommonStyles.emptyList,
        height: screenHeight / 2,
    },
    emptyMessage: {
        ...CommonStyles.emptyMessage,
    },
});

export default History;
