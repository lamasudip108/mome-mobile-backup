import * as React from 'react';
import {Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const SettingScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
        		<StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>
            	<View style={styles.viewHeading}>
	                <Text style={styles.textHeading1}>Setting</Text>
	                <Text style={styles.textHeading2}>ACCOUNT SETTING</Text>
	            </View>

	            <View style={styles.List}>
	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 250 : 240 }}>
	            		<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#E6F0FF'>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Change Password</Text>
		            			</View>
		            			<View>
		            				<Icon name="chevron-right" size={22} color="#F2F2F2" />
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#DDE0FD'>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item Two</Text>
		            			</View>
		            			<View>
		            				<Icon name="chevron-right" size={22} color="#F2F2F2" />
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#FEEFF8'>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item Three</Text>
		            			</View>
		            			<View>
		            				<Icon name="chevron-right" size={22} color="#F2F2F2" />
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            	</ScrollView>
            	</View>
	  
	  			<View style={{ marginLeft: 32, marginRight: 32, paddingBottom: 10}}>
        			<Text style={styles.textHeading2}>PAYMENT SETTING</Text>
            	</View>

            	<View style={styles.List}>
	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 350 : 300 }}>
	            		<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#E6F0FF'>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item Four</Text>
		            			</View>
		            			<View>
		            				<Icon name="chevron-right" size={22} color="#F2F2F2" />
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#DDE0FD'>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item Five</Text>
		            			</View>
		            			<View>
		            				<Icon name="chevron-right" size={22} color="#F2F2F2" />
		            			</View>
		            		</View>
	            		</TouchableOpacity>
	            		<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
		            		<View style={styles.listItem}>
		            			<View style={styles.listItemInner}>
			            			<View style={styles.roundedListItem} backgroundColor='#FEEFF8'>
			            				<Image style={{height: 19, width: 21}} source={require('@/assets/img/star.png')}/>
			            			</View>
		            				<Text style={styles.listName}>Setting Item Six</Text>
		            			</View>
		            			<View>
		            				<Icon name="chevron-right" size={22} color="#F2F2F2" />
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
        flex: 1,
        backgroundColor: '#F7F9FB',
    },
    viewHeading: {
        marginTop: Platform.OS === 'ios' ? 120 : 62,
        width: '100%',
        paddingBottom: 10,
        marginLeft: 32,
        marginRight: 32,
    },
    textHeading1: {
        fontSize: 24,
        //fontWeight:'700',
        fontFamily: 'SFProDisplay-Semibold',
        color: '#212121',
        marginBottom: 2,
        lineHeight: 36,
    },
    textHeading2: {
        fontSize: 10,
        //fontWeight:'700',
        fontFamily: 'SFProDisplay-Semibold',
        color: 'rgba(20,21,30,0.40)',
        marginBottom: 2,
        lineHeight: 18,
    },
    list: {
    	paddingTop: 11,
    	paddingBottom: 11,
    	width: '100%',
    },
    listItem: {
    	backgroundColor: '#FFFFFF',
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	paddingTop: 20,
    	paddingBottom: 20,
    	paddingLeft: 32,
    	paddingRight: 32,
    	marginBottom: 1,
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
    	//fontWeight:'700',
        fontFamily: 'SFProDisplay-Semibold',
    	lineHeight: 21,
    	color: '#212121',
    	paddingLeft: 40,
    },

});

export default SettingScreen;


