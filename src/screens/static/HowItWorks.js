import * as React from 'react';
import {I18nManager, Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const HowItWorksScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
        		<StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>
            	
            	<View style={styles.viewHeading}>
	                <Text style={styles.textHeading1}>How it works</Text>
	            </View>

	            <ScrollView style={{ height: Platform.OS === 'ios' ? 400 : 350 }}>
		            <View style={styles.list}>
		            	<View style={styles.listItem}>
		        			<View style={styles.listItemInner}>
			        			<View style={styles.circleListItem}>
		            				<Text style={styles.listNumber}>1</Text>
		            			</View>
			        			<Text style={styles.listDescription}>
			    				Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
			    				Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
			    				when an unknown
			    				</Text>
			    			</View>
		        		</View>
		        		<View style={styles.listItem}>
		        			<View style={styles.listItemInner}>
			        			<View style={styles.circleListItem}>
		            				<Text style={styles.listNumber}>2</Text>
		            			</View>
			        			<Text style={styles.listDescription}>
			    				Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
			    				Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
			    				when an unknown
			    				</Text>
			    			</View>
		        		</View>
		        		<View style={styles.listItem}>
		        			<View style={styles.listItemInner}>
			        			<View style={styles.circleListItem}>
		            				<Text style={styles.listNumber}>3</Text>
		            			</View>
			        			<Text style={styles.listDescription}>
			    				Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
			    				Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
			    				when an unknown
			    				</Text>
			    			</View>
		        		</View>
	        		</View>
        		</ScrollView>
            
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    textHeading1: {
        fontSize: 24,
        //fontWeight: '700',
        fontFamily: 'SFProDisplay-Semibold',
        color: '#212121',
        marginBottom: 2,
        lineHeight: 36,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    list: {
    	paddingTop: 45,
    	paddingBottom: 45,
    	marginLeft: 32,
        marginRight: 32,
    },
    listItem: {
    	backgroundColor: '#FFFFFF',
    	justifyContent: 'center',
    	alignItems: 'center',
    	paddingTop: 20,
    	paddingBottom: 20,
    	paddingLeft: 32,
    	paddingRight: 32,
    	marginBottom: 60,
    	
    },
    listItemInner: {
    	alignItems: 'center',
    	justifyContent: 'center',
    },
    circleListItem: {
    	height:51, 
    	width: 51,
    	borderRadius: 25.5,
    	borderWidth: 0,
    	alignItems: 'center',
    	justifyContent: 'center',
    	backgroundColor: '#D2D4FC',
    	position: 'absolute',
    	top: -50,
    },
    listNumber: {
    	color: '#0000FF',
    	fontSize: 24,
    	//fontWeight: 'bold',
        fontFamily: 'SFProDisplay-Bold',
    	lineHeight: 36,
    },
    listDescription: {
    	fontSize: 14,
    	//fontWeight: '500',
        fontFamily: 'SFProDisplay-Medium',
    	lineHeight: 21,
    	color: '#747E8F',
    	paddingTop: 25,
    	paddingBottom: 25,
    },

});

export default HowItWorksScreen;


