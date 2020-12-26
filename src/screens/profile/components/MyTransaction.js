import * as React from 'react';
import {Platform, Text, View, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const MyTransactionForm = ({navigation}) => {

    return (
        <View style={styles.container}>

            <View style={styles.topContent}>

            	<View style={styles.transactionsSummary}>
	                <View style={styles.transactionsSummaryBox}>
		                <TouchableOpacity style={styles.circleTransactionsSummary} onPress={() => navigation.navigate('ContactUs')}>
		                	<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
		                </TouchableOpacity>
		                <Text style={styles.transactionsSummaryNumber}>250</Text>
		                <Text style={styles.transactionsSummaryText}>TRANSCATION</Text>
	                </View>

	                <View style={{marginLeft:20}}></View>

	                <View style={styles.transactionsSummaryBox}>
	                    <TouchableOpacity style={styles.circleTransactionsSummary} onPress={() => navigation.navigate('MyTransaction')}>
		                	<Image style={styles.circleImage} source={require('@/assets/img/cart.png')}/>
		                </TouchableOpacity>
		                <Text style={styles.transactionsSummaryNumber}>$2550.00</Text>
		                <Text style={styles.transactionsSummaryText}>TOTAL PURCHASE</Text>
	                </View>
	            </View>
  
            </View>

            <View style={styles.middleContent}>
            	<View style={styles.middleContentHeading}>
            		<Text style={styles.middleContentText}>TODAY</Text>
            		<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            			<Text style={styles.filter}>FILTER</Text>
            			<Image style={{height:9, width:9}} source={require('@/assets/img/filter.png')}/>
            		</TouchableOpacity>	
	            </View>
            	<View style={styles.transactionsList}>
	            	<ScrollView style={{ height: 220 }}>
	            		<View style={styles.transactionsItem}>
	            			<View style={styles.circleTransactionsItem}>
	            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
	            			</View>
	            			<View style={styles.transactionInfo}>
	            				<Text style={styles.transactionsName}>AI Nakheel Mall</Text>
	            				<Text style={styles.transactionsDate}>4 October 2020, 8:30 AM</Text>
	            			</View>
	            			<Text style={styles.transactionsAmount}>-$250</Text>
	            		</View>
	            		<View style={styles.transactionsItem}>
	            			<View style={styles.circleTransactionsItem}>
	            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
	            			</View>
	            			<View style={styles.transactionInfo}>
	            				<Text style={styles.transactionsName}>The Outlet</Text>
	            				<Text style={styles.transactionsDate}>3 October 2020, 10:45 AM</Text>
	            			</View>
	            			<Text style={styles.transactionsAmount}>-$1250</Text>
	            		</View>
	            	</ScrollView>
            	</View>
	            
	            <View style={{ paddingTop:5 }}>
					<Text style={styles.middleContentText}>YESTERDAY</Text>
					<View style={styles.transactionsList}>
						<ScrollView style={{ height: Platform.OS === 'ios' ? 200 : 150 }}>
		            		<View style={styles.transactionsItem}>
		            			<View style={styles.circleTransactionsItem}>
		            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
		            			</View>
		            			<View style={styles.transactionInfo}>
		            				<Text style={styles.transactionsName}>Khaadi Sharjah</Text>
		            				<Text style={styles.transactionsDate}>2 October 2020, 1:05 PM</Text>
		            			</View>
		            			<Text style={styles.transactionsAmount}>-$3500</Text>
		            		</View>
		            		<View style={styles.transactionsItem}>
		            			<View style={styles.circleTransactionsItem}>
		            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
		            			</View>
		            			<View style={styles.transactionInfo}>
		            				<Text style={styles.transactionsName}>Mall of the Emirates</Text>
		            				<Text style={styles.transactionsDate}>2 October 2020, 3:45 PM</Text>
		            			</View>
		            			<Text style={styles.transactionsAmount}>-$110</Text>
		            		</View>
		            	</ScrollView>	
	            	</View>
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
        marginTop: Platform.OS === 'ios' ? 90 : 40,
        marginLeft: 32,
        marginRight: 32,
    },
    transactionsSummary: {
        flexDirection: 'row',
        paddingTop: 44,
        paddingBottom: 0,
        marginRight: 10,
        paddingRight: 32,
    },
    transactionsSummaryBox: {
        width: '50%',
        borderRadius: 6,
        height: 152,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
    circleTransactionsSummary: {
    	backgroundColor:'rgba(210,212,252,0.50)', 
    	height:60, 
    	width: 60,
    	borderRadius: 30,
    	borderColor: 'rgba(210,212,252,0.50)', 
    	borderWidth: 1,
    	marginBottom: 5,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    transactionsSummaryNumber: {
    	color: '#14151E',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 8,
        lineHeight: 27,
    },
    transactionsSummaryText: {
    	color: 'rgba(20,21,30,0.40)',
        fontSize: 9,
        lineHeight: 18,
    },
    circleImage: {
    	width: 34,
    	height: 28,
    },
    middleContent: {
    	backgroundColor: '#F7F9FB',
    	borderTopLeftRadius: 24,
    	borderTopRightRadius: 24,
    	borderColor: '#F7F9FB', 
    	borderWidth: 1,
    	padding: 32,
        paddingTop: 20,
    	height: '100%',
    	marginTop: 10,
    },
    middleContentHeading: {
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    },
    middleContentText: {
    	fontSize: 10, 
    	fontWeight:'700', 
    	color: 'rgba(20,21,30,0.40)', 
    	lineHeight: 18,
    },
    filter: {
    	color: '#0000FF',
    	fontSize: 10, 
    	fontWeight:'700',
    	lineHeight: 18,
    	paddingRight: 2,
    },
    transactionsList: {
    	paddingTop: 11,
    	paddingBottom: 11,
    },
    transactionsItem: {
    	backgroundColor: '#FFFFFF',
    	borderRadius: 6,
    	borderColor: '#FFFFFF',
    	borderWidth: 1,
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	padding: 20,
    	marginBottom: 10,
    },
    circleTransactionsItem: {
    	backgroundColor:'#F4F5F7', 
    	height:60, 
    	width: 60,
    	borderRadius: 30,
    	borderColor: '#F4F5F7', 
    	borderWidth: 1,
    	marginBottom: 5,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    transactionInfo: {},
    transactionsName: {
    	fontSize: 14,
    	fontWeight: '700',
    	lineHeight: 21,
    	color: '#212121',
    },
    transactionsDate: {
    	color: 'rgba(20,21,30,0.60)',
    	fontSize: 10,
    	lineHeight: 18,
    },
    transactionsAmount: {
    	color: '#F02323',
    	fontSize: 14,
    	fontWeight: 'bold',
    	lineHeight: 21,
    },

});

export default MyTransactionForm;
