import React, {useEffect} from 'react';
import {StatusBar, Text} from 'react-native';
import {Container, Box, Spinner} from 'native-base';
import i18n from 'i18n-js';

import {clearAsyncStorage, getAsyncStorage} from '@/utils/storageUtil';
import {LANGUAGE_CHANGED} from '@/constants';
import {navigate} from '@/utils/navigationUtil';

import {Colors} from '@/theme';

const LanguageSplashScreen = () => {

    useEffect(() => {
        const bootstrapAsync = async () => {
            let langKey = await getAsyncStorage(LANGUAGE_CHANGED);
            await clearAsyncStorage(LANGUAGE_CHANGED);
            if (langKey) {
                navigate('SignIn');
            } else {
                navigate('Language');
            }
        };

        bootstrapAsync();

    }, []);

    return (
        <Container style={{flex: 1, justifyContent:'center', alignItems:'center'}}>

            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>

            <Box contentContainerStyle={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Spinner color={Colors.PRIMARY_TEXT_COLOR}/>

                <Text>{i18n.t('justamoment')}</Text>
            </Box>
        </Container>
    );
};

export default LanguageSplashScreen;
