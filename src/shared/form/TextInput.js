import React, {forwardRef} from 'react';
import {I18nManager, StyleSheet, View} from 'react-native';
import {TextInput as RNTextInput} from 'react-native-paper';

import { Colors, Typography} from '@/theme';

const TextInput = forwardRef(({error, touched, ...otherProps}, ref) => {

    const validationColor = !touched ? Colors.SECONDARY_BORDER_COLOR : error ? Colors.PRIMARY_ERROR_COLOR : Colors.PRIMARY_BORDER_COLOR;

    return (
        <View style={{
            borderRadius: 25,
            borderColor: validationColor,
            borderWidth: 1,
            height: 56,
            overflow: 'hidden',
            marginLeft: 15,
            marginRight: 15,
        }}>
               <RNTextInput
                    style={styles.textInput}
                    ref={ref}
                    {...otherProps}
                />
        </View>
    );
});

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 56,
        overflow: 'hidden',
        backgroundColor: Colors.PRIMARY_INPUT_TEXT_BACKGROUND_COLOR,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE_PLUS,
        fontFamily: Typography.FONT_BOLD,
        color: Colors.PRIMARY_INPUT_TEXT_COLOR,
    },
});

export default TextInput;
