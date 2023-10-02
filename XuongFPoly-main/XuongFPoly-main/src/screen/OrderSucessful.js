import { StyleSheet, Dimensions, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StatusBarCustom from '../component/StatusBarCustom'
import colors from '../config/Colors'
import globalStyles from '../config/GlobalStyle'



const w = Dimensions.get('window').width
const h = Dimensions.get('window').height
const OrderSucessful = () => {
    return (
        <SafeAreaView style={[styles.container, globalStyles.p_16]}>
            <StatusBarCustom />
            <View
                style={{
                    height: 0.45 * h,
                    width: '100%',
                    justifyContent: 'flex-end',


                }}>
                <Image
                    style={{
                        height: '70%',
                        alignSelf: 'flex-start',
                        marginLeft: -20
                    }}
                    source={require('../asset/Image-order-sucessful.png')}
                    resizeMode='contain'
                />
            </View>
            <View style={{
                height: 0.25 * h,
                justifyContent: 'center',
            }}>
                <Text
                    style={[
                        globalStyles.mb_10,
                        globalStyles.weight700,
                        globalStyles.text_20,
                        { color: colors.brown }]}>Your Order Has Been Accepted</Text>
                <Text
                    style={[
                        globalStyles.weight400,
                        globalStyles.text_16,
                        styles.textDescription
                    ]}>We’ve accepted your order, and we’re getting it ready.</Text>
            </View>
            <TouchableOpacity
                style={[styles.buttonOrange, globalStyles.mb_10]}>
                <Text
                    style={[
                        { color: colors.white },
                        globalStyles.weight700,
                        globalStyles.text_18]}
                >Track Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.buttonOutline
                ]}>
                <Text
                    style={[
                        { color: colors.orange },
                        globalStyles.weight700,
                        globalStyles.text_18
                    ]}>Back Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OrderSucessful

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        alignItems: 'center'
    },

    textDescription: {
        color: colors.brown,
        lineHeight: 21,
        textAlign: 'center'
    },

    buttonOrange: {
        backgroundColor: colors.orange,
        width: '100%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonOutline: {
        width: '100%',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.orange,
        borderWidth: 1
    }
})