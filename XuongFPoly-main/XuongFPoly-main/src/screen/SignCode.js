import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Pressable
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import StatusBarCustom from '../component/StatusBarCustom';
import { useNavigation } from '@react-navigation/native';
import ActionBarSignUp from '../component/ActionSignUp';

const h = Dimensions.get('window').height
const SignCode = () => {
    const [codeOTP, setcodeOTP] = useState([0, 0, 0, 0, 0]);
    const inputRef = useRef();
    const navigation = useNavigation()
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    useEffect(() => {
        console.log(codeOTP);
        // console.log('hello: ', inputRef.current[0]);
    });

    return (
        <View style={styles.wrapper}>
            <StatusBarCustom />
            {/* <TouchableOpacity 
                 onPress={() => { navigation.goBack() }}>
                <Icon style={styles.backIcon} name="chevron-back-outline" size={30} />
            </TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text> */}
            <View>
                <ActionBarSignUp/>
            </View>
            <Image style={styles.image} source={require('../asset/Image-signcode.png')} />
            <Text style={styles.text1}>Enter Verification Code</Text>
            <Text style={styles.text2}>We have sent SMS to:{'\n'}046 XXX XX XX</Text>
            <View style={styles.container}>
                {codeOTP.map((value, index) => {
                    return (
                        <TextInput
                            // ref={ref => inputRef.current.push(ref)}
                            key={index}
                            style={styles.inputOTP}
                            maxLength={1}
                            keyboardType={'numeric'}
                        // onChangeText={value => {
                        //     if (value === '') {
                        //         if (inputRef.current[index - 1]) {
                        //             inputRef.current[index - 1].focus();
                        //         }
                        //     } else {
                        //         if (inputRef.current[index + 1]) {
                        //             inputRef.current[index + 1].focus();
                        //         }
                        //     }
                        //     setcodeOTP(prev => {
                        //         const arr = [...prev];
                        //         arr[index] = value;
                        //         return arr;
                        //     });
                        // }}
                        />
                    );
                })}
            </View>
            <TouchableOpacity
                onPress={goToLogin}
                style={styles.btnSignUp}
            // onPress={() => {
            //     navigation.navigate('Login');
            // }}
            >
                <Text style={styles.signUpText2}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignCode;

const styles = StyleSheet.create({
    wrapper: {
        height: h,
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    backIcon: {
        color: '#FF5E00',
        alignSelf: 'flex-start',
    },
    signUpText: {
        fontSize: 24,
        fontWeight: '700',
        height: 41,
        color: '#FF5E00',
        textAlign: 'center'
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 60,
        alignSelf: 'center',
    },
    text1: {
        fontSize: 20,
        fontWeight: '700',
        color: '#7F4E1D',
        alignSelf: 'flex-start',
    },
    text2: {
        fontSize: 18,
        fontWeight: '400',
        color: '#7F4E1D',
        alignSelf: 'flex-start',
    },
    btnSignUp: {
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FF5E00',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 48,
    },
    signUpText2: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    inputOTP: {
        width: 50,
        borderBottomColor: '#7F4E1D',
        borderBottomWidth: 3,
        fontSize: 30,
        textAlign: 'center',
        marginHorizontal: 12,
    },
});
