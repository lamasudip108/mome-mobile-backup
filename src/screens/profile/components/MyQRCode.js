import React, {useEffect} from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import {CommonStyles, Colors, Typography} from '@/theme';
import {getAsyncStorage} from '@/utils/storageUtil';
import {JWT_TOKEN} from '@/constants';
import {decodeUserID} from '@/utils/tokenUtil';

const MyQRCodeForm = (props) => {

    const {navigation, profile, loading, error, fetchCustomerByIdentifier} = props;

    useEffect(() => {
        const fetchCustomerAsync = async () => {
            let token = await getAsyncStorage(JWT_TOKEN);
            let customerID = decodeUserID(token);
            fetchCustomerByIdentifier(customerID);
        };
        fetchCustomerAsync();

    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            <View style={styles.content}>
                <View style={styles.myCode}>
                    <QRCode
                        value={[{
                            customerID: profile?.id,
                            first_name: profile?.first_name,
                            last_name: profile?.last_name,
                            email: profile?.email,
                            phone: profile?.phone,
                        }]}
                        size={257}
                        logo={require('@/assets/img/mome-logo-transparent.png')}
                        logoSize={50}
                        logoBackgroundColor='transparent'
                    />
                </View>
                <Text style={styles.name}>{profile?.first_name} {profile?.last_name}</Text>
                <Text style={styles.scan}>Scan to pay @{profile?.first_name} {profile?.last_name}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        ...CommonStyles.content,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderRadius: 25,
        padding: 20,
        marginLeft: 32,
        marginRight: 32,
        shadowColor: '#A9A9A90F',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
    },
    myCode: {
        height: 257,
        width: 257,
    },
    name: {
        color: Colors.QUATERNARY_TEXT_COLOR,
        fontFamily: Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE,
        lineHeight: 27,
        marginTop: 7,
    },
    scan: {
        color: Colors.TERTIARY_TEXT_COLOR,
        fontFamily: Typography.FONT_NORMAL,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        lineHeight: 21,
        paddingBottom: 25,
    },


});

export default MyQRCodeForm;
