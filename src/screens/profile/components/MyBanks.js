import * as React from 'react';
import {Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const MyBanksForm = ({navigation}) => {

    return (
        <View style={styles.container}>

         <View style={styles.content}>   
         <StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>
            <View style={styles.middleContent}>
            	<View style={styles.banksList}>
	            	<ScrollView style={{ height: Platform.OS === 'ios' ? 385 : 385 }}>
	            		<View style={styles.banksItem}>
	            			<View style={styles.circleBanksItem}>
	            				<Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
	            			</View>
	            			<Text style={styles.BanksName}>Qatar National Bank</Text>
	            		</View>
	            		<View style={styles.banksItem}>
                            <View style={styles.circleBanksItem}>
                                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                            </View>
                            <Text style={styles.BanksName}>Abu Dubai Islamic Bank</Text>
                        </View>
                        <View style={styles.banksItem}>
                            <View style={styles.circleBanksItem}>
                                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                            </View>
                            <Text style={styles.BanksName}>Arab Bank PLC</Text>
                        </View>
                        <View style={styles.banksItem}>
                            <View style={styles.circleBanksItem}>
                                <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                            </View>
                            <Text style={styles.BanksName}>Bank Melli Iran</Text>
                        </View>
	            	</ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('AddBank')} >
                        <View style={styles.banksItem} justifyContent="center">
                            <Text style={styles.addBank}>+ ADD BANK</Text>
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
        flex: 1,
        backgroundColor: '#F7F9FB',
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 70 : 22,
    },
    circleImage: {
    	width: 22,
    	height: 24,
    },
    middleContent: {
    	backgroundColor: '#F7F9FB',
    	padding: 32,
        paddingTop: 20,
    	height: '100%',
    	marginTop: 10,
    },
    banksList: {
    	paddingTop: 11,
    	paddingBottom: 11,
    },
    banksItem: {
    	backgroundColor: '#FFFFFF',
    	borderRadius: 6,
    	borderColor: '#FFFFFF',
    	borderWidth: 1,
    	flexDirection: 'row',
    	alignItems: 'center',
    	padding: 20,
    	marginBottom: 10,
    },
    circleBanksItem: {
    	backgroundColor:'#F4F5F7', 
    	height:44, 
    	width: 44,
    	borderRadius: 22,
    	borderColor: '#F4F5F7', 
    	borderWidth: 1,
    	alignItems: 'center',
    	justifyContent: 'center',
        marginRight: 15,
    },
    banksName: {
    	fontSize: 14,
    	lineHeight: 21,
    	color: '#212121',
    },
    addBank: {
        fontSize: 14,
        lineHeight: 21,
        color: '#0000FF',
        padding: 9,
    }

});

export default MyBanksForm;
