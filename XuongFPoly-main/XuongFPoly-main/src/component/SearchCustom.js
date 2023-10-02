import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../config/Colors';

const SearchCustom = () => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons
                style={[styles.p_10]}
                name="search-outline" size={20} color={colors.brown} />
            <TextInput
                cursorColor={"gray"}
                style={styles.input}
                placeholder='Search' />
        </View>
    )
}

export default SearchCustom

const styles = StyleSheet.create({
    input: {
        color: '#6D3805',
        width: '100%',
        height: 48,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,      
        backgroundColor: '#F3F3F3'
    },

    p_10: {
        padding: 10
    },
})