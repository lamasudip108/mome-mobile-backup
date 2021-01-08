import React from 'react';
import {I18nManager, Platform, Text, View, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useDirection} from '@/context/language';
import {CommonStyles, Colors, Typography} from '@/theme';

const SelectBankForm = ({navigation}) => {

    const {direction} = useDirection();

    return (
        <View style={styles.container}>

         <View style={styles.content}>
         <StatusBar barStyle="dark-content" backgroundColor={Colors.PRIMARY_BACKGROUND_COLOR} />
            <View style={styles.formContent}>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                  useRef={'txtSearch'}
                  placeholder="Search Bank..."
                  underlineColorAndroid='transparent'
                  onChangeText={text => setText(text)}/>
                  <Icon name="search" size={14} color={Colors.QUADENARY_TEXT_COLOR} style={{paddingRight: 15}}/>
              </View>
            </View>
            <View style={styles.middleContent}>
                <View style={styles.list}>
                    <ScrollView style={{ height: Platform.OS === 'ios' ? 685 : 585 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyBanks')}>
                            <View style={styles.listItem}>
                                <View style={styles.listItemInner}>
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.listName}>Qatar National Bank</Text>
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
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.listName}>Abu Dubai Islamic Bank</Text>
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
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.listName}>Arab Bank PLC</Text>
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
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                <Text style={styles.listName}>Bank Melli Iran</Text>
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
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.listName}>Qatar National Bank</Text>
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
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.listName}>Abu Dubai Islamic Bank</Text>
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
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                    <Text style={styles.listName}>Arab Bank PLC</Text>
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
                                    <View style={styles.circleListItem}>
                                        <Image style={styles.circleImage} source={require('@/assets/img/bank.png')}/>
                                    </View>
                                <Text style={styles.listName}>Bank Melli Iran</Text>
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

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
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
        borderBottomColor: Colors.NONARY_BORDER_COLOR,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
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
        borderBottomColor: Colors.SENARY_BORDER_COLOR,
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
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
        padding: 32,
        paddingTop: 20,
        height: '100%',
    },
    list: {},
    listItem: {
         ...CommonStyles.listItem,
        borderRadius: 6,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
        padding: 20,
        marginBottom: 10,
    },
    listItemInner: {
        ...CommonStyles.listItemInner,
    },
    circleListItem: {
        ...CommonStyles.circleListItem,
        backgroundColor:Colors.OCTONARY_BACKGROUND_COLOR,
        height:44,
        width: 44,
        borderRadius: 22,
        borderColor: Colors.SEPTENARY_BORDER_COLOR,
        marginRight: 15,
        marginLeft: Platform.OS === 'ios' ? 0 : 15,
    },
    listName: {
        ...CommonStyles.listName,
        fontFamily: Typography.FONT_NORMAL,
    },

});

export default SelectBankForm;
