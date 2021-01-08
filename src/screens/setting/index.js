import  React from 'react';
import {I18nManager, Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useDirection} from '@/context/language';

import {CommonStyles, Colors, Typography} from '@/theme';

const SettingScreen = ({navigation}) => {

	const {direction} = useDirection();

    return (
        <View style={styles.container}>
        		<StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            	<View style={styles.header}>
	                <Text style={styles.headingText1}>Setting</Text>
	                <Text style={styles.headingText2}>ACCOUNT SETTING</Text>
	            </View>

	            <View style={styles.List}>
	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 250 : 240 }}>
	            		<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedWrapper} backgroundColor={Colors.QUINARY_BACKGROUND_COLOR}>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Change Password</Text>
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
	            		<TouchableOpacity onPress={() => navigation.goBack()}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedWrapper} backgroundColor={Colors.SENARY_BACKGROUND_COLOR}>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Notifications</Text>
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
	            		<TouchableOpacity onPress={() => navigation.goBack()}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedWrapper} backgroundColor={Colors.SEPTENARY_BACKGROUND_COLOR}>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item One</Text>
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

	  			<View style={{
	  				marginLeft: 32,
	  				marginRight: 32,
	  				paddingBottom: 10,
	  				alignItems: 'flex-start',
        			justifyContent: 'flex-start',
        		}}>
        			<Text style={styles.headingText2}>PAYMENT SETTING</Text>
            	</View>

            	<View style={styles.List}>
	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 350 : 300 }}>
	            		<TouchableOpacity onPress={() => navigation.goBack()}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedWrapper} backgroundColor={Colors.QUINARY_BACKGROUND_COLOR}>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item One</Text>
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
	            		<TouchableOpacity onPress={() => navigation.goBack()}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedWrapper} backgroundColor={Colors.SENARY_BACKGROUND_COLOR}>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item Two</Text>
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
	            		<TouchableOpacity onPress={() => navigation.goBack()}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedWrapper} backgroundColor={Colors.SEPTENARY_BACKGROUND_COLOR}>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item Three</Text>
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
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },
    header: {
    	...CommonStyles.header,
        marginTop: Platform.OS === 'ios' ? 120 : 62,
        width: '100%',
        marginLeft: 32,
        marginRight: 32,
    },
    headingText1: {
        ...CommonStyles.headingText1,
        fontFamily: Typography.FONT_SEMI_BOLD,
        lineHeight: 36,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    headingText2: {
        ...CommonStyles.headingText2,
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: 'rgba(20,21,30,0.40)',
        marginBottom: 2,
        lineHeight: 18,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    list: {
    	...CommonStyles.list,
    	width: '100%',
    },
    listItem: {
    	...CommonStyles.listItem,
    	paddingTop: 20,
    	paddingBottom: 20,
    	paddingLeft: 32,
    	paddingRight: 32,
    	marginBottom: 1,
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

export default SettingScreen;


