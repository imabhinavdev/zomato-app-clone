import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Restaurant from '../../components/Restaurant/Restaurant'
import Featured from '../../components/Featured/Featured'
import featuredData from '../../data/featuredData'
import restaurantData from '../../data/RestaurantData'


const Home = () => {

    return (
        <ScrollView style={styles.Home} showsVerticalScrollIndicator={false} >
            <Header />
            <Restaurant data={5} />

            <View style={styles.forYou}>
                <Text style={styles.forYouText}>FEATURED</Text>
            </View>
            {featuredData.map((item, index) => (
                <Featured key={index} itemName={item.itemName} price={item.price} image={item.image} dist={item.dist} restName={item.restName} category={item.category} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Home: {
        paddingHorizontal:10,
    },
    forYou: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    forYouText: {
        fontSize: 20,
        textTransform: "uppercase",
        color: "gray",
        letterSpacing: 2,
    },
})


export default Home