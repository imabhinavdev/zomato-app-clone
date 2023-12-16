import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import React from 'react'

const Featured = ({ itemName, price, image, restName, category, dist }) => {
    return (
        <View>
            
            <View style={styles.card}>

                <ImageBackground
                    source={{ uri: image }}
                    style={styles.bgImages}
                >
                    <View style={styles.itemCtn}>
                        <Text style={styles.itemText}>{itemName} ₹{price}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.infoContainer}>
                    <Text style={styles.restaurantName}>{restName}</Text>
                    <Text style={styles.details}>{category} •₹{price} for one</Text>
                    <View style={styles.timer} >
                        <MaterialCommunityIcons
                            name="timer-outline"
                            size={24}
                            color={dist > 10 ? 'red' : 'green'}
                        />

                        <Text style={styles.details}>25-30 min •{dist} km</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}
export default Featured

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 5,
        backgroundColor: '#fff',
    },
    bgImages: {
        height: 220,
        justifyContent: 'flex-start',
    },
    itemCtn: {
        padding: 10,
    },
    itemText: {
        backgroundColor: 'rgba(100, 100, 100, 0.75)',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        padding: 4,
        borderRadius: 5,
        height: 30,
        width: "50%",
        textAlign: 'center',
    },
    infoContainer: {
        padding: 15,
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        color: 'gray',
        fontWeight: '500',
    },
    timer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        marginTop: 5,
    },
 
})
