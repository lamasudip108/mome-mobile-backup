import React, {useState, useEffect} from 'react';
import {
    I18nManager,
    Platform,
    FlatList,
    Text,
    View,
    ScrollView,
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

const screenHeight = Math.round(Dimensions.get('window').height);

const HistoryDetails = (props) => {

    const {direction} = useDirection();

    const {navigation, loading, error} = props;

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

                <View style={styles.List}>
                    <ScrollView style={{ height: Platform.OS === 'ios' ? 550 : 450 }}>
                        
                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <Text style={styles.listTitle}>Receiver or Requester :</Text>
                                <Text style={styles.listName}>Abdul Bari</Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <Text style={styles.listTitle}>Type :</Text>
                                <Text style={styles.listName}>Request</Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <Text style={styles.listTitle}>Amount :</Text>
                                <Text style={styles.listName}>$ 100</Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <Text style={styles.listTitle}>Processed by :</Text>
                                <Text style={styles.listName}>Wallet</Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <Text style={styles.listTitle}>Date :</Text>
                                <Text style={styles.listName}>3 October 2020, 10:45 AM</Text>
                            </View>
                        </View>

                        <View style={styles.listItem}>
                            <View style={styles.listItemInner}>
                                <Text style={styles.listTitle}>Status :</Text>
                                <Text style={styles.listName}>Completed</Text>
                            </View>
                        </View>
                        
                    </ScrollView>
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
        marginTop: Platform.OS === 'ios' ? 100 : 50,
    },
    text: {
        ...CommonStyles.text,
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
    listTitle: {
        ...CommonStyles.listName,
    },
    listName: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_NORMAL,
    },
});

export default HistoryDetails;