import React, {forwardRef} from 'react';
import {I18nManager, Platform} from 'react-native';
import {FloatingLabelInput as FLTextInput} from 'react-native-floating-label-input';

const FloatingLabelInput = forwardRef(({error, touched, ...otherProps}, ref) => {

    const validationColor = !touched ? '#BEBEBE' : error ? 'red' : '#F2F2F2';

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
                paddingHorizontal: 10,
            }}
            labelStyles={{
                paddingTop: 15,
            }}
            inputStyles={{
                fontSize: 14,
                color: '#212121',
                marginLeft: Platform.OS === 'ios' ? 5 : 2,
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
