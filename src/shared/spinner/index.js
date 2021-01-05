import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {Colors} from '@/theme';

const Spinner = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator animating={true} size='large' color={Colors.PRIMARY_TEXT_COLOR} />
        </View>
    );
};

const styles = StyleSheet.create({

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Spinner;
