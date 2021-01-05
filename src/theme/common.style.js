import {I18nManager, StyleSheet} from 'react-native';

import * as Colors from './colors';
import * as Typography from './typography';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    },
    button: {
        width: '100%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
    },
    buttonText: {
        color: Colors.PRIMARY_BUTTON_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
    },
    formSection: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        width: '70%',
    },
    errorText: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15,
    },
    buttonWrapper: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkWrapper: {
        flexDirection: 'row',
        fontSize: Typography.FONT_SIZE_MEDIUM,
    },
    headingText1: {
        fontSize: 24,
        color: '#212121',
        marginBottom: 2,
    },
    headingText2: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: '#2B2D42',
        lineHeight: 22,
    },
    headingTitle: {
        fontFamily: Typography.FONT_SEMI_BOLD,
        fontSize: 14,
        marginVertical: 10,
        color: '#0000FF',
    },
    headingSubTitle: {
        fontFamily: Typography.FONT_MEDIUM,
        fontSize: 12,
        color: '#2B2D42',
    },
});
