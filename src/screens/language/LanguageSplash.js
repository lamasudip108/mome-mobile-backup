import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Container, Content, Spinner} from 'native-base';

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
        <Container>
            <Content>
                <Spinner color='#0000FF'/>

                <Text>Just a moment while we setup language.</Text>
            </Content>
        </Container>
    );
};

export default LanguageSplashScreen;
