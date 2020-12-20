import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";

const LanguageScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading1}>Select Language</Text>
            </View>

            <View style={styles.language}>
                <TouchableOpacity style={styles.langBtnPassive}>
                    <Text style={styles.langText}>AR</Text>
                </TouchableOpacity>

                <View style={{marginLeft:10}}></View>

                <TouchableOpacity style={styles.langBtnActive}>
                    <Text style={styles.checkCircle}>
                      <AntIcon name="checkcircle" size={25} color="#0000FF" />
                    </Text>
                    <Text style={styles.langText} onPress={() => navigation.navigate('SignIn')}>EN</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FB',
        alignItems: 'center',
        paddingTop: 150,
    },

    viewHeading: {
        height: 50,
        marginBottom: 10,
        width: '80%',
    },

    textHeading1: {
        fontSize: 24,
        fontWeight: '600',
        color: '#212121',
        marginBottom: 2,
    },

    language: {
        flexDirection: 'row',
        width: '80%',
        paddingRight: 10,
    },

    langBtnPassive: {
        width: '50%',
        borderRadius: 6,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderColor: '#0000FF5C',
        borderWidth: 2,
    },

    langBtnActive: {
        width: '50%',
        borderRadius: 6,
        height: 110,
        marginBottom: 20,
        backgroundColor: '#D2D4FC',
        borderColor: '#0000FF5C',
        borderWidth: 2,
    },

    langText: {
        color: '#212121',
        fontSize: 16,
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    checkCircle: {
        textAlign: 'right',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
    }

});

export default LanguageScreen;
