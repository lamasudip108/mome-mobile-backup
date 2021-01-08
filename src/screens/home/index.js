import * as React from 'react';
import {I18nManager, Platform, Text, View, Image, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {CommonStyles, Colors, Typography} from '@/theme';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        	<StatusBar barStyle="dark-content" backgroundColor={Colors.SECONDARY_BACKGROUND_COLOR}/>
            <View style={styles.topContent}>
            	<View style={styles.topContentLeft}>
            		<View style={styles.topContentLeftCol}>
            			<Text style={styles.topContentText}>Welcome Back,</Text>
            			<Text style={styles.name}>Fatima Abdullah!</Text>
            		</View>
            		<View style={styles.topContentLeftCol}>
            			<Text style={styles.topContentText}>Wallet Amount</Text>
            			<Text style={styles.walletAmount}>$ 2500</Text>
            		</View>
            	</View>
            	<View style={styles.topContentRight}>

            		<View style={styles.circle}>
            			<Image style={styles.shoppingcart} source={require('@/assets/img/cart.png')}/>
            		</View>
            		<Text style={styles.purchaseAmount}>$2550.00</Text>
            		<Text style={styles.purchaseText}>TOTAL PURCHASE</Text>
            	</View>

            </View>

            <View style={styles.middleContent}>
                <View style={styles.middleContentHeading}>
            	   <Text style={styles.middleContentText}>FUND TRANSFER</Text>
                </View>
            	<View style={styles.fundTransferWrapper}>
	                <View style={styles.fundTransferInner}>
		                <TouchableOpacity style={styles.circleFundTransfer} onPress={() => navigation.goBack()}>
		                	<Icon name="arrow-down-left" color={Colors.PRIMARY_TEXT_COLOR} size={30} />
		                </TouchableOpacity>
		                <Text style={styles.fundTransferText}>Request</Text>
	                </View>

	                <View style={{marginLeft:20}}></View>

	                <View style={styles.fundTransferInner}>
	                    <TouchableOpacity style={styles.circleFundTransfer} onPress={() => navigation.goBack()}>
		                	<Icon name="arrow-up-right" color={Colors.PRIMARY_TEXT_COLOR} size={30} />
		                </TouchableOpacity>
		                <Text style={styles.fundTransferText}>Send</Text>
	                </View>
	            </View>

	            <View style={styles.referEarnWrapper}>
                    <View style={styles.middleContentHeading}>
					   <Text style={styles.middleContentText}>REFER & EARN</Text>
                    </View>
					<Image style={styles.referEarnImage} source={require('@/assets/img/referandearn.png')}/>
				</View>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
    },
    topContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? 90 : 50,
        marginLeft: 32,
        marginRight: 32,
    },
    topContentText: {
    	fontSize: Typography.FONT_SIZE_SMALL,
    	fontFamily: Typography.FONT_MEDIUM,
    	color: Colors.SENARY_TEXT_COLOR,
    },
    topContentLeft: {},
    topContentLeftCol: {
    	marginBottom: Platform.OS === 'ios' ? 30 : 20,
    },
    name: {
        fontFamily: Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_LARGE,
        lineHeight: 24,
        color: Colors.QUINARY_TEXT_COLOR,
    },
    walletAmount: {
    	fontFamily: Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE,
        lineHeight: 36,
        color: Colors.QUINARY_TEXT_COLOR,
    },
    topContentRight: {
    	paddingRight: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
    	backgroundColor: Colors.QUATERNARY_BACKGROUND_COLOR,
    	height:60,
    	width: 60,
    	borderRadius: 30,
    	borderColor: Colors.QUATERNARY_BORDER_COLOR,
    	borderWidth: 1,
    	marginBottom: 5,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    shoppingcart: {
    	width: 32,
    	height: 28,
    },
    purchaseText: {
    	fontSize: Typography.FONT_SIZE_TINY,
    	fontFamily: Typography.FONT_MEDIUM,
    	color: Colors.SENARY_TEXT_COLOR,
    	lineHeight: 18,
    },
    purchaseAmount: {
    	fontFamily: Typography.FONT_BOLD,
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE_PLUS,
        lineHeight: 27,
        color: Colors.QUINARY_TEXT_COLOR,
    },
    middleContent: {
    	backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    	borderTopLeftRadius: 24,
    	borderTopRightRadius: 24,
    	borderColor: Colors.QUINARY_BORDER_COLOR,
    	borderWidth: 1,
    	padding: 32,
    	paddingTop: 20,
    	height: '100%',
    	marginTop: Platform.OS === 'ios' ? 10 : 0,
    },
    middleContentHeading: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    middleContentText: {
    	fontSize: Typography.FONT_SIZE_TINY_PLUS,
    	fontFamily: Typography.FONT_SEMI_BOLD,
    	color: 'rgba(20,21,30,0.40)',
    	lineHeight: 18,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    fundTransferWrapper: {
        flexDirection: 'row',
        paddingTop: 14,
        marginRight: 20,
    },
    fundTransferInner: {
        width: '50%',
        borderRadius: 6,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
        paddingTop: 25,
    },
    circleFundTransfer: {
    	backgroundColor:'rgba(210,212,252,0.50)',
    	height:46,
    	width: 46,
    	borderRadius: 23,
    	borderColor: 'rgba(210,212,252,0.50)',
    	borderWidth: 1,
    	marginBottom: 5,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    fundTransferText: {
    	color: Colors.QUATERNARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_SMALL,
        fontFamily: Typography.FONT_SEMI_BOLD,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 25,
    },
    referEarnWrapper: {
    	paddingTop: Platform.OS === 'ios' ? 30 : 20,
    	paddingBottom: 15,
    },
    referEarnImage: {
        marginTop: 15,
        width: '100%',
    },
});

export default HomeScreen;

