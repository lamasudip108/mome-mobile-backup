import React, {forwardRef} from 'react';
import {I18nManager} from 'react-native';
import {FloatingLabelInput as FLTextInput} from 'react-native-floating-label-input';

const FloatingLabelInput = forwardRef(({error, ...otherProps}, ref) => {

    const validationColor = error ? 'red' : '#F2F2F2';

    return (
        <FLTextInput
            containerStyles={{
                backgroundColor: '#FFFFFF',
                borderRadius: 30,
                borderColor: validationColor,
                borderWidth: 1,
                width: '70%',
                height: 56,
                marginBottom: 15,
            }}
            labelStyles={{
                paddingTop: 20,
                paddingHorizontal: 10,
                paddingBottom: 15,
            }}
            inputStyles={{
                fontSize: 14,
                color: '#212121',
                paddingHorizontal: 10,
                marginLeft: 5,
                fontWeight: '500',
                marginTop: 10,
                textAlign: I18nManager.isRTL ? 'right' : 'left',
            }}
            customLabelStyles={{
                colorFocused: '#BEBEBE',
                colorBlurred: '#BEBEBE',
                fontSizeFocused: 12,
            }}
            ref={ref}
            {...otherProps}
        />
    );
});


export default FloatingLabelInput;
