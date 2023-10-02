import { StyleSheet, Dimensions, Pressable, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('window').width

const ActionBar = () => {
    return (
        <View style={[{ backgroundColor: colors.white }]}>
            <Pressable style={{maxWidth: w / 15}}>
                <AntDesign name="left" size={18} style={[{ color: colors.orange }]} />
            </Pressable>
        </View>
    )
}

export default ActionBar

const styles = StyleSheet.create({})