import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StatusBarCustom from '../component/StatusBarCustom'
import colors from '../config/Colors'
import globalStyles from '../config/GlobalStyle'
import { useNavigation } from '@react-navigation/native'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const Welcome = () => {
  const navigation = useNavigation()
  const goToSignUp = () => {
    navigation.navigate('Signup')
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* status bar */}
      <StatusBarCustom />

      <Image
        style={
          globalStyles.mtb_20
        }
        source={require('../asset/image-welcome.png')}></Image>
      <View
        style={[
          styles.textGroup
        ]} >
        <Text
          style={[
            globalStyles.mb_10,
            globalStyles.textBold,
            {
              color: colors.dark_brown,
              textAlign: 'center'
            },
            globalStyles.text_20]}>Realax and shop</Text>
        <Text
          style={[
            {
              textAlign: 'center',
              color: colors.dark_brown,
            },
          ]}>     Shop online and get grocories {'\n'}
          delivered from stores to your home{'\n'}
          in as fast as 1 hour .</Text>
      </View>

      <View >
        <TouchableOpacity
          onPress={goToSignUp}
          style={[styles.sign, globalStyles.mb_10]}
        // onPress={navigation.navigate('Signup')}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sign1}
        // onPress={navigation.navigate('Login')}
        >
          <Text style={[styles.text, { color: '#FF5E00', fontWeight: '700' }]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Welcome
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    alignItems: 'center',
    height: h
  },
  sign: {
    height: 50,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sign1: {
    width: w - 32,
    height: 50,
    backgroundColor: '',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF5E00'

  },
  text: {
    fontWeight: '700',
    fontSize: 17,
    color: '#FFFFFF',
  },

  textGroup: {
    width: " 100%",
    height: h * 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})