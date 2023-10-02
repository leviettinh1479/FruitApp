import { StyleSheet, Dimensions, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import globalStyles from '../config/GlobalStyle';
import colors from '../config/Colors';
import StatusBarCustom from '../component/StatusBarCustom';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ActionBarSignUp from '../component/ActionSignUp';

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const Signup = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [countryCode, setCountryCode] = useState(data[0])
    const navigation = useNavigation()
    const goToSignPass = () => {
        navigation.navigate('SignPass')
    }
    const goToLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBarCustom />
                {/* action bar  */}
                <ActionBarSignUp/>

                {/* image */}
                <Image
                    resizeMode='cover'
                    style={[globalStyles.mb_10,{ height: h * 0.4, width: w - 40 }]}
                    source={require('../asset/ImageSignup.png')}></Image>
                {/* input */}
                <TextInput style={[styles.Input, globalStyles.plr_16]} placeholder="Name Surname" placeholderTextColor={'rgba(172, 142, 113, 1)'}></TextInput>
                {/* <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    containerStyle={[styles.phoneContainer]}
                    textContainerStyle={{ backgroundColor: 'rgba(243, 243, 243, 1)' }}
                    textInputStyle={[styles.Input2]}
                    placeholder="Phone number"
                    onChangeFormattedText={text => {
                        setPhoneNumber(text);
                    }}
                    textInputProps={{ placeholderTextColor: 'rgba(172, 142, 113, 1)' }}
                    defaultCode="VN"
                    layout='first'
                    autoFocus ></PhoneInput> */}
                <View style={styles.edtPhoneGroup}>
                    <SelectDropdown
                        data={data}
                        onSelect={value => {
                            setCountryCode(value);
                        }}
                        buttonStyle={styles.btnDropDown}
                        dropdownStyle={{ width: "50%", borderRadius: 5 }}
                        renderCustomizedRowChild={(value, index) => {
                            const uri = value?.uri;
                            const name = value?.name;
                            const phone = value?.phone;
                            return (
                                <View style={styles.dropDownItem}>
                                    <Image style={{ width: 30, height: 20 }} source={{ uri: uri }} />
                                    <Text>{name}</Text>
                                    <Text>{phone}</Text>
                                </View>
                            );
                        }}

                        renderCustomizedButtonChild={() => {
                            const uri = countryCode?.uri;
                            return (
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image style={{ width: 30, height: 20 }} source={{ uri: uri }} />
                                </View>
                            );
                        }}

                        renderDropdownIcon={() => {
                            return (
                                <View>
                                    <Icon name="caret-down-outline" size={20} />
                                </View>
                            );
                        }}
                    />

                    <TextInput
                        style={{ width: '100%', height: '100%' }}
                        placeholder="+Phone"
                        keyboardType="phone-pad"
                        defaultValue={countryCode?.phone}
                    />
                </View>
                <Text style={styles.TextContent}>We need to verify you. We will send you a one time verification code.</Text>
                <Pressable
                    onPress={goToSignPass}
                    style={styles.ButtonNext}>
                    <Text style={styles.TextNext}>Next</Text>
                </Pressable>
                <View style={styles.ViewLogin}>
                    <Text style={{ color: 'rgba(127, 78, 29, 1)' }}>Already have an account? </Text>
                    <Pressable
                        onPress={goToLogin}>
                        <Text style={{ color: 'rgba(255, 94, 0, 1)' }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        width: w,
        height: h,
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 40,
        backgroundColor: colors.white
    },

    dropDownItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },

    btnDropDown: {
        width: '25%',
        height: '100%',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#F3F3F3',

    },

    edtPhoneGroup: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#F3F3F3',
        marginBottom: 16,
    },

    TextSignup: {
        fontFamily: 'Klarna',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: 'rgba(255, 94, 0, 1)',
        textAlign: 'center',
        marginTop: 0.5

    },
    Input: {
        marginBottom: 16,
        borderRadius: 5,
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },
    Input2: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(243, 243, 243, 1)',
    },

    TextContent: {
        fontFamily: 'Klarna',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19.2,
        color: 'rgba(127, 78, 29, 1)'
    },
    ButtonNext: {
        marginTop: 39,
        backgroundColor: 'rgba(255, 94, 0, 1)',
        borderRadius: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextNext: {
        fontFamily: 'Klarna',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: -0.41,
        color: 'white',
    },
    ViewLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10
    },
    phoneContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: 5,
        marginBottom: 16,
    },
    TextInput: {
        color: 'rgba(172, 142, 113, 1)',
    }
})

const data = [
    {
        name: 'France',
        uri: 'https://cdn-icons-png.flaticon.com/128/330/330490.png',
        phone: '+81',
    },
    {
        name: 'Australia',
        uri: 'https://cdn-icons-png.flaticon.com/128/330/330451.png',
        phone: '+82',
    },
    {
        name: 'India',
        uri: 'https://cdn-icons-png.flaticon.com/128/330/330439.png',
        phone: '+83',
    },
    {
        name: 'Canada',
        uri: 'https://cdn-icons-png.flaticon.com/128/330/330442.png',
        phone: '+84',
    },
    {
        name: 'Vietnamese',
        uri: 'https://cdn-icons-png.flaticon.com/512/330/330465.png',
        phone: '+85',
    },
];