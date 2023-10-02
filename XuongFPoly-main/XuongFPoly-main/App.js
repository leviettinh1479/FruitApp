import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Shop from './src/screen/Shop'
import Explore from './src/screen/Explore'
import Fruit from './src/screen/Fruit'
import Order from './src/screen/Order'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from './src/config/Colors'
import Welcome from './src/screen/Welcome'
import Signup from './src/screen/SignUp'
import SignPass from './src/screen/SignPass'
import SignCode from './src/screen/SignCode'
import Login from './src/screen/Login'
import OrderSucessful from './src/screen/OrderSucessful'
import OrderFailed from './src/screen/OrderFailed'

const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const MainStack = createNativeStackNavigator()
const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Shop' component={Shop} />
    </Stack.Navigator>
  )
}

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Shop'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Shop') {
            return <MaterialIcons name={'home'} size={size} color={color} />;
          }
          if (route.name === 'Explore') {
            return <MaterialIcons name={'search'} size={size} color={color} />;
          }
          if (route.name === 'Cart') {
            return <MaterialCommunityIcons name={'cart'} size={size} color={color} />
          }
          if (route.name === 'Favorite') {
            return <MaterialCommunityIcons name={'cards-heart'} size={size} color={color} />;
          }
          if (route.name === 'Account') {
            return <MaterialCommunityIcons name={'account'} size={size} color={color} />;
          }
        },

        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.brown,
        headerShown: false,
        tabBarStyle: {
          justifyContent: 'center',
          height: h * 0.09,
          padding: 15,
          paddingBottom: 10,
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          position: 'absolute',
          bottom: 0,
          borderColor: '#E9E9E9',
        },

      })}>
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Fruit} />
      <Tab.Screen name="Favorite" component={Order} />
      <Tab.Screen name="Account" component={Order} />
    </Tab.Navigator>
  )
}

const LoginScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='SignPass' component={SignPass} />
      <Stack.Screen name='SignCode' component={SignCode} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='LoginScreens' screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="LoginScreens" component={LoginScreens} />
        <MainStack.Screen name="StackNavigation" component={StackNavigation} />
        <MainStack.Screen name="BottomTabsNavigation" component={BottomTabsNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>


    // <View>
    //   <Fruit/>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})