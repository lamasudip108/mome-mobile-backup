import React, {useState, useEffect} from 'react';
import {
    I18nManager,
    Platform,
    FlatList,
    Text,
    View,
    StatusBar,
    StyleSheet,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useDirection} from '@/context/language';
import {CommonStyles, Colors} from '@/theme';

const SelectBankForm = ({navigation}) => {

    const {direction} = useDirection();

    const [banks, setBanks] = useState([]);

    const bankOptions = [
        {id: '1', name: 'Qatar National Bank'},
        {id: '2', name: 'Abu Dubai Islamic Bank'},
        {id: '3', name: 'Arab Bank PLC'},
        {id: '4', name: 'Bank Melli Iran'},
        {id: '5', name: 'Abu Dubai Islamic Bank'},
        {id: '6', name: 'Arab Bank PLC'},
        {id: '7', name: 'Bank Melli Iran'},
    ];

    const bankFilter = text => {
        const newData = bankOptions.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setBanks(newData);
    };

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text onPress={() => {
                navigation.navigate('AddBank', {item});
            }}>{item.name}</Text>
        </View>
    );

    useEffect(() => {
       setBanks(bankOptions)
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
                <View style={styles.formContent}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                                   useRef={'txtSearch'}
                                   placeholder="Search Bank..."
                                   underlineColorAndroid='transparent'
                                   onChangeText={text => bankFilter(text)}/>
                        <Icon name="search" size={14} color={Colors.QUADENARY_TEXT_COLOR} style={{paddingRight: 15}}/>
                    </View>
                </View>

                <FlatList
                    data={banks}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 80 : 22,
    },
    formContent: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 32,
        marginRight: 32,
    },
    inputContainer: {
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
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: Colors.SENARY_BORDER_COLOR,
        flex: 1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
});

export default SelectBankForm;
