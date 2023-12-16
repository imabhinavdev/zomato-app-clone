import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from 'react'
import restaurantData from '../../data/RestaurantData'

const Restaurant = ({ data }) => {
    return (


        <ScrollView
            horizontal
            style={styles.foodWrap}
            showsHorizontalScrollIndicator={false}>
            {restaurantData.map((item, index) => (
                <View key={index}>
                    <View >
                        <View style={styles.foodCtn}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.foodimg}
                            />
                            <View style={styles.foodRest}>
                                <Text style={styles.foodRestName}>{item.Name}</Text>
                                <Text style={styles.foodCat}>North Indian</Text>
                            </View>
                        </View>

                    </View>
                </View>))}
            

        </ScrollView>


    )
}

export default Restaurant

const styles = StyleSheet.create({
    foodimg: {
        width: 100,
        height: 120,
    },
    foodCtn: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        width: 210,
        height: 120,
        marginRight: 10,
        elevation: 5,
        marginBottom: 10,
    },
    foodRest: {
        marginLeft: 10,

    },
    foodRestName: {
        fontSize: 18,
        fontWeight: "500"
    },
    foodCat: {
        color: "gray",
        fontSize: 14,
    },
    foodWrap: {
        display: "flex",
        flexDirection: "row",

    },
    
})