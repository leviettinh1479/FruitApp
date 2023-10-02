import {
    Dimensions, SafeAreaView, StyleSheet, StatusBar, Text, TextInput, Image, View, ScrollView, Pressable, TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import StatusBarCustom from '../component/StatusBarCustom';
import SearchCustom from '../component/SearchCustom';
import TabLayoutFruit from '../component/TabLayoutFruit';
const w = Dimensions.get('window').width
const h = Dimensions.get('window').height

const Fruit = () => {
    const [selected, setSelected] = useState(0)
    // console.log(tabs[selected])
    return (
        <SafeAreaView style={[styles.container]}>
            {/* status bar */}
            <StatusBarCustom />
            {/* action bbar */}
            <View style={[styles.mt_16, styles.mlr_16,]}>
                <View style={[{ maxWidth: w / 15 }]}>
                    <AntDesign name="left" size={18} style={[styles.mtb_2, styles.colorOrange]} />
                </View>

                <View style={[{ flexDirection: 'row', justifyContent: 'center' }, styles.mb_10]}>
                    <Text style={[styles.text_22, styles.textBold, styles.colorOrange]}>Fruits</Text>
                </View>
                {/* search */}
                <SearchCustom />
            </View>
            {/* tab layout */}
            <TabLayoutFruit/>
            {/* <View>
                <ScrollView
                    contentContainerStyle={styles.header}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    {
                        tabs.map((e, i) => (
                            <Pressable
                                key={i}
                                onPress={() => setSelected(i)}>
                                <View
                                    style={[styles.plr_10]} >
                                    <Text
                                        style={[styles.text20, styles.colorBrown, { textAlign: 'center' }]}>
                                        {e.title}
                                    </Text>
                                </View>
                                <View>
                                    {selected == i && <View style={styles.line}></View>}
                                </View>
                            </Pressable>

                        ))
                    }
                </ScrollView>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: 'rgba(109, 56, 5, 0.06)' }} /> */}
            {/* list */}
            {/* <View>
                <ScrollView style={{ height: h / 1.5 }} >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[
                            styles.listContainer,
                            styles.mtb_16,
                            styles.mlr_16]}>
                            {
                                tabs[selected].data.map((item, index) => {
                                    if (index % 2 == 0) {
                                        return (
                                            <View
                                                key={index}
                                                style={[styles.item, styles.mb_16]}>
                                                <TouchableOpacity style={[styles.itemBtn, styles.p_16,]}>

                                                    <View style={{ alignSelf: 'center' }}>
                                                        <Image source={item.image} />
                                                    </View>

                                                    <View style={{ flex: 1 }} />

                                                    <Text style={[
                                                        { lineHeight: 18 },
                                                        styles.colorBrown,
                                                        styles.text_15,
                                                        styles.weight700]}>{item.name}</Text>

                                                    <Text style={[
                                                        { lineHeight: 14.4 },
                                                        styles.colorBrown,
                                                        styles.text_12,
                                                        styles.weight400]}>1kg</Text>

                                                    <Text style={[
                                                        { lineHeight: 24 },
                                                        styles.colorOrange,
                                                        styles.text_20,
                                                        styles.weight700]}>${item.price}</Text>

                                                    <TouchableOpacity>
                                                        <Image
                                                            style={[styles.btnAdd]}
                                                            source={require('../asset/Icon-add.png')} />
                                                    </TouchableOpacity>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }
                                })
                            }
                        </View>

                        <View style={[styles.listContainer, styles.mtb_16, styles.mr_16]} >
                            <View>
                                <Image
                                    style={{ height: 148 }}
                                    source={require('../asset/list-advertisement.png')} />
                            </View>
                            {
                                tabs[selected].data.map((item, index) => {
                                    if (index % 2 == 1) {
                                        return (
                                            <View
                                                key={index}
                                                style={[styles.item, styles.mt_16]}>
                                                <TouchableOpacity style={[styles.itemBtn, styles.p_16]}>

                                                    <View style={{ alignSelf: 'center' }}>
                                                        <Image source={item.image} />
                                                    </View>

                                                    <View style={{ flex: 1 }} />

                                                    <Text style={[
                                                        { lineHeight: 18 },
                                                        styles.colorBrown,
                                                        styles.text_15,
                                                        styles.weight700]}>{item.name}</Text>

                                                    <Text style={[
                                                        { lineHeight: 14.4 },
                                                        styles.colorBrown,
                                                        styles.text_12,
                                                        styles.weight400]}>1kg</Text>

                                                    <Text style={[
                                                        { lineHeight: 24 },
                                                        styles.colorOrange,
                                                        styles.text_20,
                                                        styles.weight700]}>${item.price}</Text>

                                                    <TouchableOpacity>
                                                        <Image
                                                            style={[styles.btnAdd]}
                                                            source={require('../asset/Icon-add.png')} />
                                                    </TouchableOpacity>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View> */}
            {/* <FoodList /> */}
            {/* <ScrollView 
                  onScroll={onScroll}
                  decelerationRate={'fast'}
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  horizontal>
                  <FoodList/>
                  <FoodList/>
                  <FoodList/>
                  <FoodList/>
              </ScrollView> */}
        </SafeAreaView>
    )
}

export default Fruit

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: w,
        height: h,
    },


    textBold: {
        fontWeight: 'bold'
    },

    text_22: {
        fontSize: 22
    },

    p_16: {
        padding: 16
    },

    mt_16: {
        marginTop: 16,

    },

    mlr_16: {
        marginHorizontal: 16
    },

    colorOrange: {
        color: '#FF5E00'
    },

    colorBrown: {
        color: '#804F1E'
    },

    mb_10: {
        marginBottom: 10
    },

    mtb_2: {
        marginVertical: 2
    },

    ptb_6: {
        paddingVertical: 6
    },

    plr_10: {
        paddingHorizontal: 10
    },

    p_18: {
        paddingHorizontal: 18
    },
    line: {
        width: "100%",
        height: 3,
        backgroundColor: '#FF5E00',
        borderTopStartRadius: 29,
        borderTopEndRadius: 29,
        marginTop: 6,

    },

    text20: {
        fontSize: 18
    },

    colorBrown: {
        color: '#804F1E'
    },

    btnAdd: {
        position: 'absolute', bottom: 0, right: 0,
        width: 29,
        height: 29,

    },
    listContainer: {
        width: (w - 48) / 2,

    },

    mtb_16: {
        marginVertical: 16,
    },

    mt_16: {
        marginTop: 16
    },

    mr_16: {
        marginRight: 16
    },

    mb_16: {
        marginBottom: 16
    },

    mlr_16: {
        marginHorizontal: 16
    },

    weight400: {
        fontWeight: "400"
    },

    weight700: {
        fontWeight: "700"
    },

    text_20: {
        fontSize: 20
    },

    text_15: {
        fontSize: 15
    },

    text_12: {
        fontSize: 12
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
        minHeight: 194,
    },

    p_10: {
        padding: 10,
    },

    p_16: {
        padding: 16
    }
})


const DATA = [
    {
        id: 1,
        name: "Red Apple",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },

    {
        id: 2,
        name: "Original Banana",
        weight: 1,
        price: 5.99,
        image: require("../asset/apple.png")
    },
    {
        id: 3,
        name: "Avocado Bowl",
        weight: 1,
        price: 3.99,
        image: require("../asset/apple.png")
    },
    {
        id: 4,
        name: "Mango",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 5,
        name: "Strawberry",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 6,
        name: "Red Apple",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 7,
        name: "Original Banana",
        weight: 1,
        price: 5.99,
        image: require("../asset/apple.png")
    },
    {
        id: 8,
        name: "Avocado Bowl",
        weight: 1,
        price: 3.99,
        image: require("../asset/apple.png")
    },
    {
        id: 9,
        name: "Mango",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 10,
        name: "Strawberry",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 11,
        name: "Red Apple",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 12,
        name: "Original Banana",
        weight: 1,
        price: 5.99,
        image: require("../asset/apple.png")
    },
    {
        id: 13,
        name: "Avocado Bowl",
        weight: 1,
        price: 3.99,
        image: require("../asset/apple.png")
    },
    {
        id: 14,
        name: "Mango",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 15,
        name: "Strawberry",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 16,
        name: "Red Apple",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 17,
        name: "Original Banana",
        weight: 1,
        price: 5.99,
        image: require("../asset/apple.png")
    },
    {
        id: 18,
        name: "Avocado Bowl",
        weight: 1,
        price: 3.99,
        image: require("../asset/apple.png")
    },
    {
        id: 19,
        name: "Mango",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    },
    {
        id: 20,
        name: "Strawberry",
        weight: 1,
        price: 4.99,
        image: require("../asset/apple.png")
    }

]

const tabs = [
    {
        id: 1,
        title: 'Fruits',
        data: [...DATA],
    },
    {
        id: 2,
        title: 'Vegtables',
        data: [...DATA.slice(4, 8)],
    },
    {
        id: 3,
        title: "Meat",
        data: [...DATA.slice(15, 20)],
    },
    {
        id: 4,
        title: "Fish",
        data: [...DATA.slice(6, 18)],
    },
    {
        id: 5,
        title: "Seafood",
        data: [...DATA],
    },
    {
        id: 6,
        title: "Juice",
        data: [...DATA],
    },
    {
        id: 7,
        title: "Egg & Milk",
        data: [...DATA],
    },
    {
        id: 8,
        title: "Ice creram",
        data: [...DATA],
    }]
