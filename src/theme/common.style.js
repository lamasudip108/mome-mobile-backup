import {StyleSheet} from 'react-native';

import * as Colors from './colors';
import * as Typography from './typography';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '70%',
        paddingBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
        color: Colors.PRIMARY_ERROR_COLOR,
        marginLeft: 15,
        marginBottom: 15,
    },
    successText: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: Colors.PRIMARY_SUCCESS_COLOR,
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
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE,
        color: Colors.PRIMARY_HEADING_COLOR,
        marginBottom: 2,
    },
    headingText2: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: Colors.SECONDARY_HEADING_COLOR,
        lineHeight: 22,
    },
    headingTitle: {
        fontFamily: Typography.FONT_SEMI_BOLD,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        marginVertical: 10,
        color: Colors.PRIMARY_TEXT_COLOR,
    },
    headingSubTitle: {
        fontFamily: Typography.FONT_MEDIUM,
        fontSize: Typography.FONT_SIZE_SMALL,
        color: Colors.SECONDARY_TEXT_COLOR,
    },
    body: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        paddingTop: 11,
        paddingBottom: 11,
    },
    listItem: {
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemInner: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    roundedWrapper: {
        height:35, 
        width: 35,
        borderRadius: 8,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listName: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_SEMI_BOLD,
        lineHeight: 21,
        color: Colors.QUATERNARY_TEXT_COLOR,
        marginLeft: 15,
    },
    circleListItem: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleFixed: {
        alignItems: 'center',
        justifyContent: 'center',
        height:55, 
        width: 55,
        borderRadius: 27.5,
        borderWidth: 0,
        marginBottom: 5,
    },
});
