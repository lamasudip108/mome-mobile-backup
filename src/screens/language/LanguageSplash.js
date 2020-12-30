import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Container, Content, Spinner} from 'native-base';
import i18n from 'i18n-js';

import {clearAsyncStorage, getAsyncStorage} from '@/utils/storageUtil';
import {LANGUAGE_CHANGED} from '@/constants';
import {navigate} from '@/utils/navigationUtil';

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
            <Content contentContainerStyle={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Spinner color='#0000FF'/>

                <Text>{i18n.t('justamoment')}</Text>
            </Content>
        </Container>
    );
};

export default LanguageSplashScreen;
