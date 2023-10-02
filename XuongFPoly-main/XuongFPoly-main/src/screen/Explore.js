import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, } from 'react-native'
import React from 'react'
import SearchCustom from '../component/SearchCustom';
import StatusBarCustom from '../component/StatusBarCustom';
import globalStyles from '../config/GlobalStyle';
import colors from '../config/Colors';

const w = Dimensions.get('window').width
const Explore = () => {
    const renderItemCategories = (props) => {
        const { item } = props;
        const { image } = item;
        return (
            <TouchableOpacity style={[styles.cateitems, { minHeight: 134.83, width: (w - 32) / 3, marginTop: 30 }]}>
                <Image
                    source={{ uri: image }}
                    resizeMode='contain'
                    style={{ height: null, width: null, flex: 1}}
                />
            </TouchableOpacity>
        )
    }

    const renderItemProduct = (props) => {
        const { item } = props;
        const { name, image, price } = item;
        return (
            <View style={styles.productitems}>
                <View>
                    <Image
                        source={{ uri: image }}
                        style={{
                            alignSelf: 'center',
                            marginTop: 17,
                            width: 120,
                            height: 100,
                            resizeMode: 'contain'
                        }}
                    />
                </View>

                <Text
                    style={{
                        marginTop: 20,
                        color: '#6D3805',
                        fontWeight: '700',
                        fontSize: 15,
                        lineHeight: 18.31,
                    }}>{name}</Text>
                <Text>1kg</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text
                        style={{
                            color: '#FF5E00',
                            fontWeight: '700',
                            fontSize: 20,
                            lineHeight: 24,
                        }}>${price}</Text>

                    <Image
                        source={require('../asset/Icon-add.png')}
                        style={{
                            width: 24,
                            height: 24
                        }}
                    />
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBarCustom/>
            <View style={[styles.location, globalStyles.mtb_10]}>
                <Text style={styles.userlocation}>Categories</Text>
            </View>

            {/* <View style={styles.searchcontainer}>

                <TextInput
                    cursorColor={"gray"}
                    style={styles.input}
                    placeholder='Search' />
                <Image
                    style={styles.iconsearch}
                    source={require('../../../media/images/shop/search.png')}
                    resizeMode='cover'
                />
            </View> */}

            <SearchCustom />

            <FlatList
                numColumns={3}
                style={styles.list}
                data={catadata}
                renderItem={renderItemCategories}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />

        </SafeAreaView>
    )
}

export default Explore

const styles = StyleSheet.create({
    scroll: {
        height: 420,
        maxHeight: 600,
    },
    listproduct: {
        marginTop: "5%",
        height: 200,
    },
    productitems: {
        marginRight: 16,
        width: 150,
        paddingLeft: 11,
        paddingRight: 11,
        paddingBottom: 13,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    list: {
        height: '80%',
        width: '100%',
        // paddingLeft: 16,
    },
    seeall: {
        color: '#FF5E00',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 21.6,
    },
    title: {
        color: '#6D3805',
        fontSize: 22,
        lineHeight: 26.4,
        fontWeight: '700',
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 34
    },
    iconsearch: {
        position: 'absolute',
        left: 10,
        top: 20,
    },
    input: {
        paddingLeft: 40,
        width: '100%',
        padding: 10,
        height: 48,
        borderRadius: 8,
        color: '#6D3805',
        marginTop: 4,
        backgroundColor: '#F3F3F3'
    },
    searchcontainer: {
        position: 'relative',
        flexDirection: 'row',
        marginTop: 18,
    },
    userlocation: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 28.8,
        letterSpacing: -0.17,
        marginLeft: 8.62,
        color: '#FF5E00',
    },

    location: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    container: {
        padding: 16,
        backgroundColor: colors.white
    },
})

var catadata = [
    {
        id: 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/Group%20196.png?alt=media&token=75d3b648-8a32-43d2-883d-8229fd962e80"
    },

    {
        id: 2,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/vegetables.png?alt=media&token=2bef9e47-cbc5-477c-a9cd-d5b902b3fc45"
    },

    {
        id: 3,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/juice.png?alt=media&token=6745279b-e487-469c-8bf4-57c3aaac987f"
    },

    {
        id: 4,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/meat.png?alt=media&token=d1ad2411-f511-484d-805e-e1df063129ab"
    },

    {
        id: 5,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/fruits.png?alt=media&token=eb4b1233-c471-4a97-b00f-edf13add3569"
    },

    {
        id: 6,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/eggmilk.png?alt=media&token=36016bed-2ccf-4a6f-b43e-6da3c4b3e1c1"
    },

    {
        id: 7,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/juice.png?alt=media&token=6745279b-e487-469c-8bf4-57c3aaac987f"
    },

    {
        id: 8,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/seafood.png?alt=media&token=28c5ad1c-1607-42fd-9994-50af507ee5e9"
    },

]

var productdata = [
    {
        id: 1,
        'name': 'Red Apple',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/apple.png?alt=media&token=e901e6f0-bae2-4a2e-a644-be475c1bbf01',
        'price': '4.99'
    },

    {
        id: 2,
        'name': 'Original Banana',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/banana.png?alt=media&token=1c4c057a-dc70-42ba-af19-3c874e2865ad',
        'price': '5.99'
    },

    {
        id: 3,
        'name': 'Avocado Bow',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/avocado.png?alt=media&token=e34dd760-8b43-4d2c-801d-408bdd0896fd',
        'price': '3.99'
    },

    {
        id: 4,
        'name': 'Mango',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/mango.png?alt=media&token=cd3e30a6-87db-4712-96d9-3154fdb05d3d',
        'price': '7.99'
    },

    {
        id: 5,
        'name': 'Red Strawberry',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/strawberry.png?alt=media&token=5c8d0f03-0d7f-4fb6-913e-9582db176950',
        'price': '12.99'
    },
]
