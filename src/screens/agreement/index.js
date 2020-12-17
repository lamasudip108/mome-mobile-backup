import * as React from 'react';
import {Text, View, Button, ScrollView, StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

const AgreementScreen = (props) => {

    const {navigation, route} = props;

    console.log("I am here", route?.params?.customer);

    const {colors} = useTheme();

    return (
        <>
            <View style={styles.meta}>
                <Text style={[styles.title, {color: colors.text}]}>TERMS OF SERVICE</Text>
                <Text style={[styles.timestamp, {color: colors.text}]}>Last Updated: 8 OCT 2020</Text>
            </View>
            <ScrollView
                style={{backgroundColor: colors.card}}
            >
                <Text style={[styles.title, {color: colors.text}]}>A.INTRODUCTION TO OUR SERVICES </Text>
                <Text style={[styles.paragraph, {color: colors.text}]}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                </Text>
                <Text style={[styles.title, {color: colors.text}]}>B.USING OUR SERVICES </Text>
                <Text style={[styles.paragraph, {color: colors.text}]}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                </Text>
                <Text style={[styles.title, {color: colors.text}]}>C.INTRODUCTION TO OUR SERVICES </Text>
                <Text style={[styles.paragraph, {color: colors.text}]}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                </Text>
            </ScrollView>
            <View>
                <Button onPress={() => navigation.goBack()} title="Cancel"/>
                <Button onPress={() => navigation.goBack()} title="Accept"/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        paddingVertical: 16,
    },
    author: {
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    meta: {
        marginHorizontal: 8,
        justifyContent: 'center',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
    },
    timestamp: {
        opacity: 0.5,
        fontSize: 14,
        lineHeight: 21,
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 24,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 36,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginVertical: 8,
    },
});
export default AgreementScreen;
