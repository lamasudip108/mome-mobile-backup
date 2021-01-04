import * as Colors from './colors';
import * as Typography from './typography';

export const loginButton = {
    width: '100%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
};

export const loginButtonText = {
    color: Colors.PRIMARY_BUTTON_TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_MEDIUM,
    fontFamily: 'SFProDisplay-Bold',

};

export const errorText = {
    fontSize: Typography.FONT_SIZE_MEDIUM,
    color: 'red',
    marginLeft: 15,
    marginBottom: 15,
};

export const signupButton = {
    color: Colors.PRIMARY_BUTTON_COLOR,
    fontFamily: 'SFProDisplay-Medium',
    paddingLeft: 8,
};

export const signupButtonText = {
    color: Colors.SECONDARY_BUTTON_TEXT_COLOR,
};

export const container = {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
};
