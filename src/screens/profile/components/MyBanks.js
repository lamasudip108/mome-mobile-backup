import * as React from 'react';
import {Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import {CommonStyles, Colors, Typography} from '@/theme';

const MyBanksForm = ({navigation}) => {

    return (
        <View style={styles.container}>

         <View style={styles.content}>   
         <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR}/>
            <View style={styles.contentWrapper}>
            	<View style={styles.list}>
	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 385 : 385 }}>
	            		<View style={styles.listItem}>
	            			<View style={styles.circleListItem}>
	            				<Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
	            			</View>
	            			<Text style={styles.listName}>Qatar National Bank</Text>
	            		</View>
	            		<View style={styles.listItem}>
                            <View style={styles.circleListItem}>
                                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                            </View>
                            <Text style={styles.listName}>Abu Dubai Islamic Bank</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.circleListItem}>
                                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                            </View>
                            <Text style={styles.listName}>Arab Bank PLC</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.circleListItem}>
                                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                            </View>
                            <Text style={styles.listName}>Bank Melli Iran</Text>
                        </View>
	            	</ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('AddBank')} >
                        <View style={styles.listItem} justifyContent="center">
                            <Text style={styles.text}>+ ADD BANK</Text>
                        </View>
                    </TouchableOpacity>
            	</View>	            
            </View>
          
          </View>  
            
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 70 : 22,
    },
    circleImage: {
    	width: 22,
    	height: 24,
    },
    contentWrapper: {
    	backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
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
    	borderRadius: 6,
    	borderColor: Colors.SENARY_BORDER_COLOR,
    	borderWidth: 1,
    	padding: 20,
    	marginBottom: 10,
        justifyContent: 'flex-start',
    },
    circleListItem: {
        ...CommonStyles.circleListItem,
    	backgroundColor:Colors.OCTONARY_BACKGROUND_COLOR, 
    	height:44, 
    	width: 44,
    	borderRadius: 22,
    	borderColor: Colors.SEPTENARY_BORDER_COLOR, 
    	marginRight: 15,
    },
    listName: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_NORMAL,
    },
    text: {
        fontFamily: Typography.FONT_NORMAL,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        lineHeight: 21,
        color: Colors.PRIMARY_TEXT_COLOR,
        padding: 9,
    }

});

export default MyBanksForm;
