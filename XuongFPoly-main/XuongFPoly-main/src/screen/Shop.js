import { StyleSheet, Text, View, Image, FlatList, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, } from 'react-native'
import React from 'react'
import colors from '../config/Colors';
import StatusBarCustom from '../component/StatusBarCustom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchCustom from '../component/SearchCustom';
import globalStyles from '../config/GlobalStyle';
const w = Dimensions.get('window').width
const h = Dimensions.get('window').height


const Shop = () => {
    //adapter
    const renderItemCategories = (props) => {
        const { item } = props;
        const { image } = item;
        return (
            <TouchableOpacity>
                <Image
                    source={{ uri: image }}
                    style={[{ height: h * 0.185, width: w / 3.9 }, styles.mr_10]}
                />
            </TouchableOpacity>
        )
    }
    const renderItemProduct = (props) => {
        const { item } = props;
        const { name, image, price } = item;
        return (
            <View
                style={[styles.productItem, { margin: 5 }]}>
                <TouchableOpacity style={[styles.itemBtn, globalStyles.p_16,]}>

                    <View style={{ paddingBottom: 5, alignSelf: 'center', height: '60%', width: '80%' }}>
                        <Image style={{ width: null, height: null, flex: 1 }} source={require('../asset/banana.png')} resizeMode="contain" />
                    </View>

                    <Text style={[
                        { lineHeight: 18 },
                        styles.colorBrown,
                        globalStyles.text_15,
                        globalStyles.weight700]}>Mango</Text>

                    <Text style={[
                        { lineHeight: 14.4 },
                        styles.colorBrown,
                        globalStyles.text_12,
                        globalStyles.weight400]}>1kg</Text>

                    <Text style={[
                        { lineHeight: 24 },
                        styles.colorOrange,
                        globalStyles.text_20,
                        globalStyles.weight700]}>$100</Text>

                    <TouchableOpacity>
                        <Image
                            style={[styles.btnAdd]}
                            source={require('../asset/Icon-add.png')} />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* status bar */}
            <StatusBarCustom />

            <View style={[globalStyles.plr_16, globalStyles.mt_20,]}>
                {/* title */}
                <View
                    style={[
                        styles.location,
                        styles.mt_20,
                        globalStyles.mb_10
                    ]}>
                    <View >
                        <Image source={require('../asset/Icon-location.png')} />
                    </View>
                    <Text style={styles.userlocation}>User location</Text>
                </View>

                {/* search */}
                <View style={globalStyles.mtb_10}>
                    <SearchCustom />
                </View>
            </View>


            <ScrollView style={styles.scroll}>
                {/* categlory */}
                <View style={[styles.section, globalStyles.p_16,]}>
                    <Text style={styles.title}>Categories</Text>
                    <Text style={[styles.seeAll, globalStyles.mr_20]}>See All</Text>
                </View>

                <FlatList
                    horizontal={true}
                    style={[styles.list, globalStyles.mb_16, globalStyles.plr_16 ]}
                    data={categoryData}
                    renderItem={renderItemCategories}
                    keyExtractor={(item) => item._id}
                    showsHorizontalScrollIndicator={false}
                />

                {/* popular */}
                <View style={[styles.section, globalStyles.mtb_20, globalStyles.plr_16]}>
                    <Text style={styles.title}>Popular Deals</Text>
                    <Text style={[styles.seeAll, globalStyles.mr_20]}>See All</Text>
                </View>

                <FlatList
                    horizontal={true}
                    style={[styles.listProduct, globalStyles.plr_16]}
                    data={productData}
                    renderItem={renderItemProduct}
                    keyExtractor={(item) => item._id}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Shop

const styles = StyleSheet.create({
  

    btnAdd: {
        position: 'absolute', bottom: 0, right: 0,
        width: 29,
        height: 29,

    },

    productItem: {
        width: 0.35 * w,
        maxHeight: 194,
    },

    colorOrange: {
        color: '#FF5E00'
    },

    colorBrown: {
        color: "#6D3805"
    },

    itemBtn: {
        elevation: 4,
        borderRadius: 20,

    },
    productItems: {
        marginRight: 16,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        elevation: 11,

    },
    list: {
        // marginTop: "5%",

    },
    seeAll: {
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

    },
    iconsearch: {
        position: 'absolute',
        left: 10,
        top: 20,
    },

    userlocation: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 28.8,
        marginLeft: 8.62,
        color: '#FF5E00',
    },

    location: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    mt_20: {
        marginTop: 20,
    },

    p_10: {
        padding: 10
    },

    container: {
        backgroundColor: '#fff',
        width: w,
        height: "100%"
    },

    mr_10: {
        marginRight: 10
    }
})

var categoryData = [
    {
        _id: 1,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/Group%20196.png?alt=media&token=75d3b648-8a32-43d2-883d-8229fd962e80"
    },

    {
        _id: 2,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/vegetables.png?alt=media&token=2bef9e47-cbc5-477c-a9cd-d5b902b3fc45"
    },

    {
        _id: 3,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/juice.png?alt=media&token=6745279b-e487-469c-8bf4-57c3aaac987f"
    },

    {
        _id: 4,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/meat.png?alt=media&token=d1ad2411-f511-484d-805e-e1df063129ab"
    },

    {
        _id: 5,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/fruits.png?alt=media&token=eb4b1233-c471-4a97-b00f-edf13add3569"
    },

    {
        _id: 6,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/eggmilk.png?alt=media&token=36016bed-2ccf-4a6f-b43e-6da3c4b3e1c1"
    },

    {
        _id: 7,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/juice.png?alt=media&token=6745279b-e487-469c-8bf4-57c3aaac987f"
    },

    {
        _id: 8,
        "image": "https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/seafood.png?alt=media&token=28c5ad1c-1607-42fd-9994-50af507ee5e9"
    },

]

var productData = [
    {
        _id: 1,
        'name': 'Red Apple',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/apple.png?alt=media&token=e901e6f0-bae2-4a2e-a644-be475c1bbf01',
        'price': '4.99'
    },

    {
        _id: 2,
        'name': 'Original Banana',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/banana.png?alt=media&token=1c4c057a-dc70-42ba-af19-3c874e2865ad',
        'price': '5.99'
    },

    {
        _id: 3,
        'name': 'Avocado Bow',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/avocado.png?alt=media&token=e34dd760-8b43-4d2c-801d-408bdd0896fd',
        'price': '3.99'
    },

    {
        _id: 4,
        'name': 'Mango',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/mango.png?alt=media&token=cd3e30a6-87db-4712-96d9-3154fdb05d3d',
        'price': '7.99'
    },

    {
        _id: 5,
        'name': 'Red Strawberry',
        'image': 'https://firebasestorage.googleapis.com/v0/b/duan-f46e9.appspot.com/o/strawberry.png?alt=media&token=5c8d0f03-0d7f-4fb6-913e-9582db176950',
        'price': '12.99'
    },
]
