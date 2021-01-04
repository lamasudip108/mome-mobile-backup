import {StyleSheet} from 'react-native';

import common from 'common.style';

import * as Colors from './colors';
import * as Typography from './typography';

export default StyleSheet.create({
    formSection: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorSection: {
        width: '70%',
    },
    errorText: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15,
    },
    loginButton: {
        ...common.button,
        height: 50,
        marginBottom: 20,
    },
    signUpButton: {
        ...common.button,
        height: 56,
    },
    buttonText: {
        color: Colors.PRIMARY_BUTTON_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
    },
});
