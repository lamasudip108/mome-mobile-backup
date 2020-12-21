import * as React from 'react';
import {Text, View, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>

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
            	<Text style={styles.middleContentText}>FUND TRANSFER</Text>
            	<View style={styles.fundTransfer}>
	                <View style={styles.fundTransferBox}>
		                <TouchableOpacity style={styles.circleFundTransfer} onPress={() => navigation.navigate('Home')}>
		                	<Icon name="arrow-down-left" color="#0000FF" size={30} />
		                </TouchableOpacity>
		                <Text style={styles.fundTransferText}>Request</Text>
	                </View>

	                <View style={{marginLeft:20}}></View>

	                <View style={styles.fundTransferBox}>
	                    <TouchableOpacity style={styles.circleFundTransfer} onPress={() => navigation.navigate('Home')}>
		                	<Icon name="arrow-up-right" color="#0000FF" size={30} />
		                </TouchableOpacity>
		                <Text style={styles.fundTransferText}>Send</Text>
	                </View>
	            </View>

	            <View style={styles.referEarn}>
					<Text style={styles.middleContentText}>REFER & EARN</Text>
					<Image style={styles.referEarnImage} source={require('@/assets/img/referandearn.png')}/>
				</View>	            
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000FF',
    },
    topContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //width: '85%',
        marginTop: 90,
        marginLeft: 32,
        marginRight: 32,
    },
    topContentText: {
    	fontSize: 12,
    	fontWeight: '600',
    	color: '#F2F2F2',
    },
    topContentLeft: {
    	
    },
    topContentLeftCol: {
    	marginBottom: 30,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24,
        color: '#FFFFFF',
    },
    walletAmount: {
    	fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        color: '#FFFFFF',
    },
    topContentRight: {
    	paddingRight: 40,
    },
    circle: {
    	backgroundColor:'#D2D4FC', 
    	height:60, 
    	width: 60,
    	borderRadius: 30,
    	borderColor: '#D2D4FC', 
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
    	fontSize: 9,
    	fontWeight: '600',
    	color: '#F2F2F2',
    	lineHeight: 18,
    },
    purchaseAmount: {
    	fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 27,
        color: '#FFFFFF',
    },
    middleContent: {
    	backgroundColor: '#F7F9FB',
    	borderTopLeftRadius: 24,
    	borderTopRightRadius: 24,
    	borderColor: '#F7F9FB', 
    	borderWidth: 1,
    	padding: 32,
    	height: '100%',
    	marginTop: 10,
    },
    middleContentText: {
    	fontSize: 10, 
    	fontWeight:'700', 
    	color: 'rgba(20,21,30,0.40)', 
    	lineHeight: 18,
    },
    fundTransfer: {
        flexDirection: 'row',
        paddingTop: 14,
        marginRight: 20,
    },
    fundTransferBox: {
        width: '50%',
        borderRadius: 6,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
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
    	color: '#212121',
        fontSize: 12,
        fontWeight: '700',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 25,
    },
    referEarn: {
    	paddingTop: 30,
    	paddingBottom: 15,
    },
    referEarnImage: {
        marginTop: 15,
        width: '100%',
    },
});

export default HomeScreen;

