import { StyleSheet, Dimensions, Pressable, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../config/Colors';

const w = Dimensions.get('window').width
const ActionBarSignUp = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable onPress={() => { navigation.goBack() }}>
                <View style={[{ maxWidth: w / 15 }]}>
                <Icon style={styles.backIcon} color={colors.orange} name="chevron-back-outline" size={25} />
                </View>
            </Pressable>

            <Text style={styles.TextSignup}>Sign Up</Text>
        </View>
    )
}

export default ActionBarSignUp

const styles = StyleSheet.create({
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
})