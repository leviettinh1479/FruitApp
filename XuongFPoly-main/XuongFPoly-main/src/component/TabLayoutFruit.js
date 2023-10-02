import { Dimensions, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
const Tab = createMaterialTopTabNavigator()
const w = Dimensions.get('window').width;
const MyTabs = (props) => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    elevation: 1
                },
                tabBarPressColor: 'white',
                tabBarIndicatorStyle: {
                    height: 3,
                    backgroundColor: '#FF5E00',
                },
                tabBarLabelStyle: {
                    fontSize: 16,
                    textTransform: 'capitalize',
                    color: '#804F1E'
                },
                tabBarItemStyle: { width: 'auto' },
                tabBarScrollEnabled: true,
            }}

            initialLayout={Dimensions.get('window').width}>
            <Tab.Screen name="Fruits" component={HomeScreen} />
            <Tab.Screen name="Vegetables" component={HomeScreen} />
            <Tab.Screen name="Meat" component={HomeScreen} />
            <Tab.Screen name="Fish" component={HomeScreen} />
            <Tab.Screen name="Sea food" component={HomeScreen} />
            <Tab.Screen name="Juice" component={HomeScreen} />
            <Tab.Screen name="Egg & Milk" component={HomeScreen} />
            <Tab.Screen name="Ice cream" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

function HomeScreen() {
    return (
        <ScrollView style={{ height: "100%" }} >
            <View style={{ flexDirection: 'row' }}>
                <View style={[
                    styles.listContainer,
                    styles.mtb_16,
                    styles.mlr_16]}>
                    {
                        DATA.map((item, index) => {
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
                        DATA.map((item, index) => {
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
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const TabLayoutFruit = () => {
    return (
        <MyTabs />
    )
}

export default TabLayoutFruit

const styles = StyleSheet.create({
    listContainer: {
        width: (w - 48) / 2,
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