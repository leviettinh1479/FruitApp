import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Pressable,
    Dimensions
} from 'react-native';
import React from 'react';
import ActionBar from '../component/ActionBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusBarCustom from '../component/StatusBarCustom';
import colors from '../config/Colors';
import { useNavigation } from '@react-navigation/native';
import ActionBarSignUp from '../component/ActionSignUp';
import globalStyles from '../config/GlobalStyle';

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const SignPass = () => {
    const navigation = useNavigation()
    const goToSignCode = () => {
        navigation.navigate('SignCode')
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarCustom />
            {/* <Pressable
                onPress={() => { navigation.goBack() }}>
                <ActionBar />
            </Pressable> */}
            <View>
                <ActionBarSignUp />
            </View>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../asset/ImageSignPass.png')}
            />

            <Text style={[styles.chuText1, globalStyles.mt_10]}>Enter the password</Text>
            <Text style={[styles.chuText2, globalStyles.mtb_20]}>
                For the security & safety please choose a password
            </Text>

            {/* textinput */}

            <View>
                <View style={styles.txt_custom}>
                    <Image
                        style={styles.hinh_okhoa_txtInput}
                        source={require('../asset/Icon-password.png')}
                    />
                    <TextInput style={styles.txtInput} placeholder="Password" />
                    <Image
                        resizeMode='contain'
                        style={styles.eye_txtInput}
                        source={require('../asset/Icon-eyes.png')}
                    />
                </View>

                <View style={[styles.txt_custom, globalStyles.mtb_10]}>
                    <Image
                        style={styles.hinh_okhoa_txtInput}
                        source={require('../asset/Icon-password.png')}
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder="Confirm Password"
                        keyboardAppearance="default"
                    />
                    <Image
                        resizeMode='contain'
                        style={styles.eye_txtInput}
                        source={require('../asset/Icon-eyes.png')}
                    />
                </View>
                <TouchableOpacity
                    onPress={goToSignCode}
                    style={styles.btn}>
                    {/* <Pressable style={styles.btn}> */}
                    <Text style={styles.txtBtn}>Next</Text>
                    {/* </Pressable> */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 16,
        flex: 1
    },
    header: {
        direction: 'column',
        display: 'flex',
    },
    arrowImage: {
        width: 8.49,
        height: 14,

        margin: 10,
    },
    signText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF5E00',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        lineHeight: 41,
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 0.4 * h,

    },
    chuText1: {
        fontSize: 20,
        fontWeight: '700',
        color: '#7F4E1D',
    },
    chuText2: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#7F4E1D',

    },
    txt_custom: {
        flexDirection: 'row',
        backgroundColor: '#F3F3F3',
        justifyContent: 'space-between',
        borderRadius: 16,

    },
    hinh_okhoa_txtInput: {
        margin: 15,
        height: 20,
        width: 15,
    },
    txtInput: {
        flex: 1

    },
    eye_txtInput: {
        // margin:,
        marginRight: 10,
        marginTop: 15,
        height: 20,
        width: 20,
    },
    btn: {
        backgroundColor: '#FF5E00',
        height: 50,
        borderRadius: 16,
        justifyContent: 'center'
    },
    txtBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});
export default SignPass;
