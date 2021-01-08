import React, {forwardRef} from 'react';
import {I18nManager, StyleSheet, View} from 'react-native';
import {TextInput as FLTextInput} from 'react-native-paper';

import { Colors, Typography} from '@/theme';

const FlatTextInput = forwardRef(({error, touched, ...otherProps}, ref) => {

    const validationColor = !touched ? Colors.SECONDARY_BORDER_COLOR : error ? Colors.PRIMARY_ERROR_COLOR : Colors.PRIMARY_BORDER_COLOR;

    return (
        <View style={{
            borderRadius: 30,
            borderColor: validationColor,
            borderWidth: 1,
            width: '100%',
            height: 56,
            overflow: 'hidden',
            marginBottom: 15,
        }}>
               <FLTextInput
                    style={styles.textInput}
                    selectionColor={Colors.PRIMARY_INPUT_TEXT_COLOR}
                    theme={{
                        roundness: 30,
                        colors: {
                            primary: Colors.SECONDARY_INPUT_TEXT_COLOR,
                            placeholder: Colors.SECONDARY_INPUT_TEXT_COLOR,
                        },
                    }}
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
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: Colors.PRIMARY_INPUT_TEXT_COLOR,
    },
});


export default FlatTextInput;
