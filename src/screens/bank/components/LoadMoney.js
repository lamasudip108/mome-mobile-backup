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

import {useDirection} from '@/context/language';
import {CommonStyles, Typography, Colors} from '@/theme';

const LoadMoney = (props) => {

    const {direction} = useDirection();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
                <View style={styles.form}>
                    <View style={styles.searchWrapper}>
                        <Text> I am here</Text>
                    </View>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },
});

export default LoadMoney;
