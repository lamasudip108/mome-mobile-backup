import * as React from 'react';
import {I18nManager, Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Button, CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import {useDirection} from '@/context/language';

const SelectBankForm = ({navigation}) => {

    const {direction} = useDirection();

    return (
        <View style={styles.container}>

         <View style={styles.content}>   
         <StatusBar barStyle="dark-content" backgroundColor="#F7F9FB"/>
            <View style={styles.formContent}>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                  useRef={'txtSearch'}
                  placeholder="Search Bank..."
                  underlineColorAndroid='transparent'
                  onChangeText={text => setText(text)}/>
                  <Icon name="search" size={14} color="#A9A9A9" style={{paddingRight: 15}}/>
              </View>
            </View>
            <View style={styles.middleContent}>
                <View style={styles.banksList}>
                    <ScrollView style={{ height: Platform.OS === 'ios' ? 685 : 585 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyBanks')}>
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.BanksName}>Qatar National Bank</Text>
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
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.BanksName}>Abu Dubai Islamic Bank</Text>
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
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.BanksName}>Arab Bank PLC</Text>
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
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                <Text style={styles.BanksName}>Bank Melli Iran</Text>
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
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.BanksName}>Qatar National Bank</Text>
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
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.BanksName}>Abu Dubai Islamic Bank</Text>
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
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.BanksName}>Arab Bank PLC</Text>
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
                            <View style={styles.banksItem}>
                                <View style={styles.bankItemInner}>
                                    <View style={styles.circleBanksItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                <Text style={styles.BanksName}>Bank Melli Iran</Text>
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
            
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB',
    },
    content: {
        marginTop: Platform.OS === 'ios' ? 80 : 22,
    },
    formContent:{
        flexDirection: 'row',
        marginTop:30,
        marginLeft: 32,
        marginRight: 32,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        shadowColor: '#A9A9A933',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    icon:{
        width:30,
        height:30,
    },
    iconBtnSearch:{
        alignSelf:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center',
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
        //marginTop: 10,
    },
    banksList: {
        //paddingTop: 11,
        //paddingBottom: 11,
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
        justifyContent: 'space-between',
    },
    bankItemInner: {
        flexDirection: 'row', 
        alignItems: 'center',
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
        marginLeft: Platform.OS === 'ios' ? 0 : 15,
    },
    banksName: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 14,
        lineHeight: 21,
        color: '#212121',
    },

});

export default SelectBankForm;
