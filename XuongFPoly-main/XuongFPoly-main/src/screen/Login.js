import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
    Pressable
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionBar from '../component/ActionBar';
import StatusBarCustom from '../component/StatusBarCustom';

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
const h = Dimensions.get('window').height
const Login = () => {
    const navigation = useNavigation()
    const goToShop = () => {
        navigation.navigate('BottomTabsNavigation', { screen: 'Shop' })
    }
    const [isSelected, setIsSelected] = useState(false);
    const [temp, setTemp] = useState(data[0]);


    return (
        <View style={styles.wrapper}>
            <StatusBarCustom />
            <View style={{ flexDirection: 'row' }}>
            </View>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Icon style={styles.backIcon} name="chevron-back-outline" size={25} />
            </TouchableOpacity>
            <Text style={styles.signInText}>Sign In</Text>
            <View style={{
                height: 0.4 * h,
                width: '100%'
            }}>
                <Image resizeMode='cover' style={[styles.image]} source={require('../asset/Image-login.png')} />
            </View>
            <Text style={styles.text}>
                Enter your phone number and password to access your account
            </Text>
            <View style={styles.container3}>
                <SelectDropdown
                    buttonStyle={styles.btnDropDown}
                    data={data}
                    defaultValue={data[0]}
                    dropdownStyle={{ width: 343 }}
                    renderCustomizedRowChild={(value, index) => {
                        const uri = value?.uri;
                        const name = value?.name;
                        const phone = value?.phone;
                        return (
                            <View style={styles.container4}>
                                <Image style={{ width: 30, height: 20 }} source={{ uri: uri }} />
                                <Text>{name}</Text>
                                <Text>{phone}</Text>
                            </View>
                        );
                    }}
                    renderCustomizedButtonChild={() => {
                        const uri = temp?.uri;
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
                    onSelect={value => {
                        setTemp(value);
                    }}
                />
                <TextInput
                    style={styles.inputPhone}
                    placeholder="+Phone"
                    keyboardType="phone-pad"
                    defaultValue={temp?.phone}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Password"
                    secureTextEntry={isSelected ? false : true}
                />
                <TouchableOpacity
                    style={styles.container5}
                    onPress={() => {
                        setIsSelected(!isSelected);
                    }}>
                    <Icon
                        style={styles.eyeIcon}
                        name={isSelected ? 'eye-off' : 'eye'}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.text2}>Forgote Password</Text>
            <TouchableOpacity
                onPress={goToShop}
                style={styles.btnSignIn}
            >
                <Text style={styles.signInText2}>Sign in</Text>
            </TouchableOpacity>
            <View style={styles.container2}>
                <Text style={styles.text3}>Don’t have an account?</Text>
                <Pressable
                    onPress={() => {
                        navigation.navigate('SignCode');
                    }}>
                    <Text style={[styles.text3, { color: '#FF5E00' }]}> Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    wrapper: {

        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    container: {
        justifyContent: 'center',
        marginBottom: 12,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 6,
    },
    container3: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#F3F3F3',
        marginVertical: 16,
    },
    container4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    container5: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingEnd: 12,
    },
    backIcon: {
        color: '#FF5E00',
        alignSelf: 'flex-start',
    },
    signInText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FF5E00',
        alignSelf: 'center',
    },
    image: {
        width: null,
        height: null,
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: '#6D3805',
        alignSelf: 'flex-start',
    },
    text2: {
        fontSize: 14,
        fontWeight: '400',
        color: '#FF5E00',
        alignSelf: 'flex-end',
    },
    text3: {
        fontSize: 16,
        fontWeight: '400',
        color: '#7F4E1D',
    },
    eyeIcon: {
        color: '#7F4E1D',
    },
    inputPassword: {
        width: '100%',
        height: 48,
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
        padding: 12,
        paddingStart: 24,
    },
    btnSignIn: {
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FF5E00',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    signInText2: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    btnDropDown: {
        width: 80,
        height: '100%',
        backgroundColor: '#F3F3F3',
        borderRadius: 5,
    },
    inputPhone: {
        width: '100%',
        height: '100%',
    },
});