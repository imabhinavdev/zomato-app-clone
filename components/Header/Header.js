import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={styles.mainWrap}>
            <View style={styles.headingWrap}>
                <View style={styles.headingCtn}>
                    <Ionicons name="ios-location-sharp" size={32} color="#e03546" />
                    <View style={styles.headingLocation}>
                        <Text style={styles.headingTitle}>Hostel</Text>
                        <Text style={styles.headingDesc}>
                            Sagar Institute of Science a...
                        </Text>
                    </View>
                </View>

                <View style={styles.language}>
                    <FontAwesome name="language" size={24} color="black" />
                </View>
                <View style={styles.headingProfile}>
                    <Image
                        source={require("../../assets/images/profile.png")}
                        style={styles.headingProfileImg}
                    />
                </View>
            </View>

            <View style={styles.searchWrap}>
                <FontAwesome name="search" size={20} color="#e03546" />
                <Text style={styles.searchText}>Restaurant name or a dish..</Text>
                <Feather name="mic" size={20} color="#e03546" />
            </View>
            <View style={styles.forYou}>
                <Text style={styles.forYouText}>For You</Text>
            </View>



        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    mainWrap: {
    },
    headingWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headingCtn: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "70%",
    },
    headingTitle: {
        fontSize: 26,
        fontWeight: "800",
    },
    headingLocation: {
        marginLeft: 5,
    },
    language: {
        borderWidth: 1,
        borderColor: "black",
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
    },
    headingProfile: {
        borderWidth: 1,
        marginLeft: 10,
        borderColor: "black",
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        marginLeft: 10,
    },
    headingProfileImg: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
    },
    headingDesc: {
        color: "gray",
        fontSize: 14,
        letterSpacing: 0.8,
    },
    searchWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        elevation: 10,
    },
    searchText: {
        color: "gray",
        fontWeight: "500",
        fontSize: 14,
        letterSpacing: 0.8,
        width: "70%",
        shadowColor: "red",
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    forYou: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    forYouText: {
        fontSize: 20,
        textTransform: "uppercase",
        marginTop: 20,
        color: "gray",
        letterSpacing: 2,
    },

});
