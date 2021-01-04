import * as React from 'react';
import {Platform, Text, View, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import {useDirection} from '@/context/language';

const ProfileForm = ({navigation}) => {

    const {toggleDirection, direction} = useDirection();

    return (
        <View style={styles.container}>

            <View style={styles.topContent}>

            	<View style={styles.profile}>


	                <View style={styles.circleProfile}>

	                	<Image style={styles.circleImage} source={require('@/assets/img/profile-cropped.png')}/>

		                <TouchableOpacity style={styles.circleEdit} onPress={() => navigation.navigate('EditProfile')}>
		                	<Icon name="edit" size={18} color="#0000FF" />
		                </TouchableOpacity>

	                </View>
	                <Text style={styles.name}>Fatima Abdullah</Text>
	                <Text style={styles.amount}>$ 2500.00</Text>
	                <View>
	                <Button style={styles.fundBtn} onPress={() => navigation.navigate('AddFund')}>
	                    <Text style={styles.fundText}>+ ADD FUND</Text>
	                </Button>
	                </View>
	            </View>

            </View>

            <View style={styles.middleContent}>

            	<View style={styles.List}>
	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 520 : 400 }}>
	            		<TouchableOpacity onPress={() => navigation.navigate('MyTransaction')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#E4F0F8'>
			            				<Image style={{height: 18, width: 14}} source={require('@/assets/img/my-transactions.png')}/>
			            			</View>
		            				<Text style={styles.listName}>My Transactions</Text>
		            			</View>
		            			<View>
                                    {direction === 'ltr' &&
		            				<Icon name="chevron-right" size={22} color="#F2F2F2" />
                                    }
                                    {direction === 'rtl' &&
                                    <Icon name="chevron-left" size={22} color="#F2F2F2" />
                                    }
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('MyCode')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#E4E6F8'>
			            				<Image style={{height: 18, width: 18, marginLeft: 2}} source={require('@/assets/img/my-code.png')}/>
			            			</View>
		            				<Text style={styles.listName}>My Code</Text>
		            			</View>
		            			<View>
		            				{direction === 'ltr' &&
                                    <Icon name="chevron-right" size={22} color="#F2F2F2" />
                                    }
                                    {direction === 'rtl' &&
                                    <Icon name="chevron-left" size={22} color="#F2F2F2" />
                                    }
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('MyBanks')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#FFEFD0B7'>
			            				<Image style={{height: 20, width: 16}} source={require('@/assets/img/my-banks.png')}/>
			            			</View>
		            				<Text style={styles.listName}>My Banks</Text>
		            			</View>
		            			<View>
		            				{direction === 'ltr' &&
                                    <Icon name="chevron-right" size={22} color="#F2F2F2" />
                                    }
                                    {direction === 'rtl' &&
                                    <Icon name="chevron-left" size={22} color="#F2F2F2" />
                                    }
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('HowItWorks')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#E9F7EF'>
			            				<Image style={{height: 20, width: 20}} source={require('@/assets/img/how-it-works.png')}/>
			            			</View>
		            				<Text style={styles.listName}>How it works</Text>
		            			</View>
		            			<View>
		            				{direction === 'ltr' &&
                                    <Icon name="chevron-right" size={22} color="#F2F2F2" />
                                    }
                                    {direction === 'rtl' &&
                                    <Icon name="chevron-left" size={22} color="#F2F2F2" />
                                    }
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('TermsConditions')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#FEF5F5'>
			            				<Image style={{height: 21, width: 16}} source={require('@/assets/img/terms-n-conditions.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Terms and Conditions</Text>
		            			</View>
		            			<View>
		            				{direction === 'ltr' &&
                                    <Icon name="chevron-right" size={22} color="#F2F2F2" />
                                    }
                                    {direction === 'rtl' &&
                                    <Icon name="chevron-left" size={22} color="#F2F2F2" />
                                    }
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#FFEFF5'>
			            				<Image style={{height: 20, width: 20}} source={require('@/assets/img/contact-us.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Contact Us</Text>
		            			</View>
		            			<View>
		            				{direction === 'ltr' &&
                                    <Icon name="chevron-right" size={22} color="#F2F2F2" />
                                    }
                                    {direction === 'rtl' &&
                                    <Icon name="chevron-left" size={22} color="#F2F2F2" />
                                    }
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#E4F0F8'>
			            				<Image style={{height: 20, width: 20}} source={require('@/assets/img/logout.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Logout</Text>
		            			</View>
		            			<View>
		            				{direction === 'ltr' &&
                                    <Icon name="chevron-right" size={22} color="#F2F2F2" />
                                    }
                                    {direction === 'rtl' &&
                                    <Icon name="chevron-left" size={22} color="#F2F2F2" />
                                    }
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            	</ScrollView>
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
        justifyContent: 'center',
        alignItems: 'center',
        //width: '85%',
        marginTop: Platform.OS === 'ios' ? 90 : 40,
        marginLeft: 32,
        marginRight: 32,
    },
    profile: {
        paddingTop: 28,
        paddingBottom: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleEdit: {
    	backgroundColor:'#F4F5F7',
    	height:31,
    	width: 31,
    	borderRadius: 15,
    	borderColor: '#F4F5F7',
    	borderWidth: 1,
    	alignItems: 'center',
    	justifyContent: 'center',
    	position: 'absolute',
    	top: 0,
    	right: 0,
    },
    circleProfile: {
    	backgroundColor:'#CCCCCC',
    	height:101,
    	width: 101,
    	borderRadius: 50,
    	borderColor: '#CCCCCC',
    	borderWidth: 2,
    	marginBottom: 5,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    name: {
    	color: '#FFFFFF',
        fontSize: 18,
        //fontWeight: 'bold',
        fontFamily: 'SFProDisplay-Bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 8,
        lineHeight: 27,
    },
    amount: {
    	color: '#F2F2F2',
        fontSize: 14,
        //fontWeight: '600',
        fontFamily: 'SFProDisplay-Medium',
        lineHeight: 24,
    },
    circleImage: {
    	height:101,
    	width: 101,
    	borderRadius: 50,
    	borderColor: '#CCCCCC',
    	borderWidth: 2,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    fundBtn: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: '#0000FF',
        padding: 10,
        marginTop: 10,
    },
    fundText: {
        color: '#FFFFFF',
        fontSize: 14,
        //fontWeight: 'bold',
        fontFamily: 'SFProDisplay-Bold',
    },
    middleContent: {
    	backgroundColor: '#FFFFFF',
    	padding: 32,
        paddingTop: 20,
    	height: '100%',
    	marginTop: 10,
    },
    list: {
    	paddingTop: 11,
    	paddingBottom: 11,
    },
    listItem: {
    	backgroundColor: '#FFFFFF',
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	paddingTop: 10,
    	paddingBottom: 10,
    	marginBottom: 10,
    },
    listItemInner: {
    	flexDirection: 'row',
    	alignItems: 'center',
    },
    roundedListItem: {
    	height:35,
    	width: 35,
    	borderRadius: 8,
    	borderWidth: 0,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    listName: {
    	fontSize: 14,
    	//fontWeight: '700',
        fontFamily: 'SFProDisplay-Semibold',
    	lineHeight: 21,
    	color: '#212121',
    	//paddingLeft: 40,
        marginLeft: 15,
    },

});

export default ProfileForm;

