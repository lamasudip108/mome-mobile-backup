import React from 'react';
import {
    Platform, 
    Text, 
    View, 
    Image, 
    ScrollView, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions
} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import i18n from 'i18n-js';

import {useDirection} from '@/context/language';
import {CommonStyles, Colors, Typography} from '@/theme';

const screenHeight = Math.round(Dimensions.get('window').height);

const Profile = (props) => {

    const { direction} = useDirection();

    const {navigation, profile, loading, error} = props;

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, height: screenHeight}}>
            <View style={styles.container}>

                <View style={styles.topContent}>

                	<View style={styles.profile}>

    	                <View style={styles.circleProfile}>

    	                	<Image style={styles.circleImage} source={require('@/assets/img/profile-cropped.png')}/>

    		                <TouchableOpacity style={styles.circleEdit} onPress={() => navigation.navigate('EditProfile')}>
    		                	<Icon name="edit" size={18} color={Colors.PRIMARY_TEXT_COLOR} />
    		                </TouchableOpacity>

    	                </View>
    	                <Text style={styles.name}>{profile?.first_name} {profile?.last_name}</Text>
    	                <Text style={styles.amount}>$ {profile?.wallet_amount}</Text>
    	                <View>
    	                <Button style={styles.button} onPress={() => navigation.navigate('SelectMyBank')}>
    	                    <Text style={styles.buttonText}>+ {i18n.t('addfund')}</Text>
    	                </Button>
    	                </View>
    	            </View>

                </View>

                <View style={styles.middleContent}>

                	<View style={styles.List}>
    	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 520 : 400 }}>
    	            		<TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
    		            		<View style={styles.listItem}>
    		            			<View style={styles.listItemInner}>
    			            			<View style={styles.roundedWrapper} backgroundColor={Colors.DENARY_BACKGROUND_COLOR}>
    			            				<Image style={{height: 18, width: 14}} source={require('@/assets/img/my-transactions.png')}/>
    			            			</View>
    		            				<Text style={styles.listName}>{i18n.t('mytransactions')}</Text>
    		            			</View>
    		            			<View>
                                        {direction === 'ltr' &&
    		            				<Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
    		            			</View>
    		            		</View>
    	            		</TouchableOpacity>
    	            		<TouchableOpacity onPress={() => navigation.navigate('MyQRCode')}>
    		            		<View style={styles.listItem}>
    		            			<View style={styles.listItemInner}>
    			            			<View style={styles.roundedWrapper} backgroundColor={Colors.UNDENARY_BACKGROUND_COLOR}>
    			            				<Image style={{height: 18, width: 18, marginLeft: 2}} source={require('@/assets/img/my-code.png')}/>
    			            			</View>
    		            				<Text style={styles.listName}>{i18n.t('myqrcode')}</Text>
    		            			</View>
    		            			<View>
    		            				{direction === 'ltr' &&
                                        <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
    		            			</View>
    		            		</View>
    	            		</TouchableOpacity>
    	            		<TouchableOpacity onPress={() => navigation.navigate('MyBanks')}>
    		            		<View style={styles.listItem}>
    		            			<View style={styles.listItemInner}>
    			            			<View style={styles.roundedWrapper} backgroundColor='#FFEFD0B7'>
    			            				<Image style={{height: 20, width: 16}} source={require('@/assets/img/my-banks.png')}/>
    			            			</View>
    		            				<Text style={styles.listName}>{i18n.t('mybanks')}</Text>
    		            			</View>
    		            			<View>
    		            				{direction === 'ltr' &&
                                        <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
    		            			</View>
    		            		</View>
    	            		</TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('History')}>
                                <View style={styles.listItem}>
                                    <View style={styles.listItemInner}>
                                        <View style={styles.roundedWrapper} backgroundColor={Colors.THRIODENARY_BACKGROUND_COLOR}>
                                            <MaterialCommunityIcons name="history" size={24} color={Colors.SEPTENARY_TEXT_COLOR} />
                                        </View>
                                        <Text style={styles.listName}>{i18n.t('history')}</Text>
                                    </View>
                                    <View>
                                        {direction === 'ltr' &&
                                        <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                    </View>
                                </View>
                            </TouchableOpacity>
    	            		<TouchableOpacity onPress={() => navigation.navigate('HowItWorks')}>
    		            		<View style={styles.listItem}>
    		            			<View style={styles.listItemInner}>
    			            			<View style={styles.roundedWrapper} backgroundColor={Colors.DUODENARY_BACKGROUND_COLOR}>
    			            				<Image style={{height: 20, width: 20}} source={require('@/assets/img/how-it-works.png')}/>
    			            			</View>
    		            				<Text style={styles.listName}>{i18n.t('how')}</Text>
    		            			</View>
    		            			<View>
    		            				{direction === 'ltr' &&
                                        <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
    		            			</View>
    		            		</View>
    	            		</TouchableOpacity>
    	            		<TouchableOpacity onPress={() => navigation.navigate('TermsConditions')}>
    		            		<View style={styles.listItem}>
    		            			<View style={styles.listItemInner}>
    			            			<View style={styles.roundedWrapper} backgroundColor={Colors.THRIODENARY_BACKGROUND_COLOR}>
    			            				<Image style={{height: 21, width: 16}} source={require('@/assets/img/terms-n-conditions.png')}/>
    			            			</View>
    		            				<Text style={styles.listName}>{i18n.t('tc')}</Text>
    		            			</View>
    		            			<View>
    		            				{direction === 'ltr' &&
                                        <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
    		            			</View>
    		            		</View>
    	            		</TouchableOpacity>
    	            		<TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
    		            		<View style={styles.listItem}>
    		            			<View style={styles.listItemInner}>
    			            			<View style={styles.roundedWrapper} backgroundColor={Colors.THRIODENARY_BACKGROUND_COLOR}>
    			            				<Image style={{height: 20, width: 20}} source={require('@/assets/img/contact-us.png')}/>
    			            			</View>
    		            				<Text style={styles.listName}>{i18n.t('contactus')}</Text>
    		            			</View>
    		            			<View>
    		            				{direction === 'ltr' &&
                                        <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
    		            			</View>
    		            		</View>
    	            		</TouchableOpacity>
    	            		<TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
    		            		<View style={styles.listItem}>
    		            			<View style={styles.listItemInner}>
    			            			<View style={styles.roundedWrapper} backgroundColor={Colors.DENARY_BACKGROUND_COLOR}>
    			            				<Image style={{height: 20, width: 20}} source={require('@/assets/img/logout.png')}/>
    			            			</View>
    		            				<Text style={styles.listName}>{i18n.t('logout')}</Text>
    		            			</View>
    		            			<View>
    		            				{direction === 'ltr' &&
                                        <Icon name="chevron-right" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
                                        {direction === 'rtl' &&
                                        <Icon name="chevron-left" size={22} color={Colors.SENARY_TEXT_COLOR} />
                                        }
    		            			</View>
    		            		</View>
    	            		</TouchableOpacity>
    	            	</ScrollView>
                	</View>

                </View>

            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        backgroundColor: Colors.SECONDARY_BACKGROUND_COLOR,
    },
    topContent: {
        justifyContent: 'center',
        alignItems: 'center',
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
    	backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
    	height:31,
    	width: 31,
    	borderRadius: 15,
    	borderColor: Colors.SEPTENARY_BORDER_COLOR,
    	borderWidth: 1,
    	alignItems: 'center',
    	justifyContent: 'center',
    	position: 'absolute',
    	top: 0,
    	right: 0,
    },
    circleProfile: {
    	backgroundColor: Colors.NONARY_BACKGROUND_COLOR,
    	height:101,
    	width: 101,
    	borderRadius: 50,
    	borderColor: Colors.OCTONARY_BORDER_COLOR,
    	borderWidth: 2,
    	marginBottom: 5,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    name: {
    	color: Colors.QUINARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE,
        fontFamily: Typography.FONT_BOLD,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 8,
        lineHeight: 27,
    },
    amount: {
    	color: Colors.SENARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_MEDIUM,
        lineHeight: 24,
    },
    circleImage: {
    	height:101,
    	width: 101,
    	borderRadius: 50,
    	borderColor: Colors.OCTONARY_BORDER_COLOR,
    	borderWidth: 2,
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    button: {
        ...CommonStyles.button,
        width: 'auto',
        height: 40,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 2,
        borderRadius: 100,
        padding: 10,
        marginTop: 10,
    },
    buttonText: {
        ...CommonStyles.buttonText,
        color: Colors.SECONDARY_BUTTON_COLOR,
    },
    middleContent: {
    	backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
    	padding: 32,
        paddingTop: 20,
    	height: '100%',
    	marginTop: 10,
    },
    list: {
    	...CommonStyles.list,
    },
    listItem: {
    	...CommonStyles.listItem,
    	paddingTop: 10,
    	paddingBottom: 10,
    	marginBottom: 10,
    },
    listItemInner: {
    	...CommonStyles.listItemInner,
    },
    roundedWrapper: {
        ...CommonStyles.roundedWrapper,
    },
    listName: {
    	...CommonStyles.listName,
    },

});

export default Profile;

