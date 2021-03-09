import React from 'react';
import {StyleSheet, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {CommonStyles, Colors, Typography} from '@/theme';

const CircleIcon = () => {
    return (
        <Text style={styles.checkCircle}>
            <AntIcon name="checkcircle" size={25} color={Colors.SECONDARY_BACKGROUND_COLOR}/>
        </Text>
    );
};

const styles = StyleSheet.create({
    checkCircle: {
        textAlign: 'right',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
    },

});

export default CircleIcon;
