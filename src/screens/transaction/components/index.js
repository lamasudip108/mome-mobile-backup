import  React from 'react';
import {Platform, Text, View, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import {CommonStyles, Colors, Typography} from '@/theme';

const Transaction = ({navigation}) => {

    return (
        <View style={styles.container}>

            <View style={styles.topContent}>

            	<View style={styles.transactionsSummary}>
	                <View style={styles.transactionsSummaryWrapper}>
		                <TouchableOpacity style={styles.circleTransactionsSummary} onPress={() => navigation.navigate('ContactUs')}>
		                	<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
		                </TouchableOpacity>
		                <Text style={styles.transactionsSummaryNumber}>250</Text>
		                <Text style={styles.transactionsSummaryText}>TRANSCATION</Text>
	                </View>

	                <View style={{marginLeft:20}}></View>

	                <View style={styles.transactionsSummaryWrapper}>
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
            	<View style={styles.list}>
	            	<ScrollView style={{ height: 220 }}>
	            		<View style={styles.listItem}>
	            			<View style={styles.circleListItem}>
	            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
	            			</View>
	            			<View style={styles.listInfo}>
	            				<Text style={styles.listName}>AI Nakheel Mall</Text>
	            				<Text style={styles.listDate}>4 October 2020, 8:30 AM</Text>
	            			</View>
	            			<Text style={styles.listAmount}>-$250</Text>
	            		</View>
	            		<View style={styles.listItem}>
	            			<View style={styles.circleListItem}>
	            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
	            			</View>
	            			<View style={styles.listInfo}>
	            				<Text style={styles.listName}>The Outlet</Text>
	            				<Text style={styles.listDate}>3 October 2020, 10:45 AM</Text>
	            			</View>
	            			<Text style={styles.listAmount}>-$1250</Text>
	            		</View>
	            	</ScrollView>
            	</View>

	            <View style={{ paddingTop:5 }}>
					<Text style={styles.middleContentText}>YESTERDAY</Text>
					<View style={styles.list}>
						<ScrollView style={{ height: Platform.OS === 'ios' ? 200 : 150 }}>
		            		<View style={styles.listItem}>
		            			<View style={styles.circleListItem}>
		            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
		            			</View>
		            			<View style={styles.listInfo}>
		            				<Text style={styles.listName}>Khaadi Sharjah</Text>
		            				<Text style={styles.listDate}>2 October 2020, 1:05 PM</Text>
		            			</View>
		            			<Text style={styles.listAmount}>-$3500</Text>
		            		</View>
		            		<View style={styles.listItem}>
		            			<View style={styles.circleListItem}>
		            				<Image style={styles.circleImage} source={require('@/assets/img/transactions.png')}/>
		            			</View>
		            			<View style={styles.listInfo}>
		            				<Text style={styles.listName}>Mall of the Emirates</Text>
		            				<Text style={styles.listDate}>2 October 2020, 3:45 PM</Text>
		            			</View>
		            			<Text style={styles.listAmount}>-$110</Text>
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
        ...CommonStyles.container,
        backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
    },
    topContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    transactionsSummaryWrapper: {
        width: '50%',
        borderRadius: 6,
        height: 152,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
    },
    circleTransactionsSummary: {
        ...CommonStyles.circleListItem,
    	backgroundColor:'rgba(210,212,252,0.50)',
    	borderColor: 'rgba(210,212,252,0.50)',
    	marginBottom: 5,
        height:60,
        width: 60,
        borderRadius: 30,
    },
    transactionsSummaryNumber: {
    	color: Colors.SEPTENARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE_PLUS,
        fontFamily: Typography.FONT_BOLD,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 8,
        lineHeight: 27,
    },
    transactionsSummaryText: {
        fontFamily: Typography.FONT_MEDIUM,
    	color: 'rgba(20,21,30,0.40)',
        fontSize: Typography.FONT_SIZE_TINY,
        lineHeight: 18,
    },
    circleImage: {
    	width: 34,
    	height: 28,
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
    	marginTop: 10,
    },
    middleContentHeading: {
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    },
    middleContentText: {
    	fontSize: Typography.FONT_SIZE_TINY_PLUS,
    	fontFamily: Typography.FONT_SEMI_BOLD,
    	color: 'rgba(20,21,30,0.40)',
    	lineHeight: 18,
    },
    filter: {
    	color: Colors.PRIMARY_TEXT_COLOR,
    	fontSize: Typography.FONT_SIZE_TINY_PLUS,
    	fontFamily: Typography.FONT_SEMI_BOLD,
    	lineHeight: 18,
    	paddingRight: 2,
    },
    list: {
    	...CommonStyles.list,
    },
    listItem: {
        ...CommonStyles.listItem,
    	borderRadius: 6,
    	borderColor: Colors.SENARY_BORDER_COLOR,
    	borderWidth: 1,
    	alignItems: 'center',
    	padding: 20,
    	marginBottom: 10,
    },
    circleListItem: {
        ...CommonStyles.circleListItem,
    	backgroundColor:Colors.OCTONARY_BACKGROUND_COLOR,
    	borderColor: Colors.SEPTENARY_BORDER_COLOR,
    	marginBottom: 5,
        height:60,
        width: 60,
        borderRadius: 30,
    },
    listInfo: {},
    listName: {
        ...CommonStyles.listName,
    	marginLeft: 0,
    },
    listDate: {
    	color: 'rgba(20,21,30,0.60)',
    	fontSize: Typography.FONT_SIZE_TINY_PLUS,
    	lineHeight: 18,
        fontFamily: Typography.FONT_NORMAL,
    },
    listAmount: {
        color: Colors.OCTONARY_TEXT_COLOR,
    	fontSize: Typography.FONT_SIZE_MEDIUM,
    	fontFamily: Typography.FONT_BOLD,
    	lineHeight: 21,
    },

});

export default Transaction;
