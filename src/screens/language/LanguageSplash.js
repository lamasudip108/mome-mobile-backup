import React, {useEffect} from 'react';
import {Text} from 'react-native';
import { Container, Content, Spinner } from 'native-base';

import {clearAsyncStorage, getAsyncStorage} from '@/utils/storageUtil';
import {IS_LANGUAGE_CHANGED} from '@/constants';
import {navigate} from '@/utils/navigationUtil';

const LanguageSplashScreen = () => {

    useEffect(() => {
        const bootstrapAsync = async () => {
            let langKey =  await getAsyncStorage(IS_LANGUAGE_CHANGED);
            await clearAsyncStorage(IS_LANGUAGE_CHANGED);
            if(langKey) {
                navigate('SignIn');
            }
        };

        bootstrapAsync();

    }, []);
    return (
        <Container>
            <Content>
                <Spinner color='#0000FF' />

                <Text>Just a moment while we setup language.</Text>
            </Content>
        </Container>
    );
};

export default LanguageSplashScreen;
