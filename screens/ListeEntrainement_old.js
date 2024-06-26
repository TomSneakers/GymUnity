import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Filter from "../components/ListeExercise/Filter";
import Search from "../components/ListeExercise/Search";


export default function ListeEntrainement({ navigation }) {
    const [starredItems, setStarredItems] = useState([false, false, false]);
    const [isStarred, setIsStarred] = useState(false); // État pour le filtre
    const [search, setSearch] = useState(''); // État pour la recherche

    const toggleStar = (index) => {
        const updatedStarredItems = [...starredItems];
        updatedStarredItems[index] = !updatedStarredItems[index];
        setStarredItems(updatedStarredItems);
    };

    const filteredItems = (isStarred ? starredItems.map((starred, index) => starred ? index : null).filter(index => index !== null) : [0, 1, 2])
        .filter(index => `Entrainement ${index + 1}`.toLowerCase().includes(search.toLowerCase()));

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.ScrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Entrainements</Text>
                    <View style={styles.underline} />
                    <Filter isStarred={isStarred} setIsStarred={setIsStarred} />
                    <Search search={search} setSearch={setSearch} />

                    {filteredItems.map((index) => (
                        <View style={styles.itemContainer} key={index}>
                            <TouchableOpacity style={styles.bouton} onPress={() => navigation.navigate("Entrainement")}>
                                <View style={styles.item}>
                                    <View style={styles.textuel}>
                                        <Text style={styles.itemTitle}>Entrainement {index + 1}</Text>

                                        <View style={styles.itemCountContainer}>
                                            <View style={styles.timeCountContainer}>
                                                <Image source={require('../assets/Training/time.png')} style={styles.imageTime} />
                                                <Text style={styles.timeNumber}>10 Minutes</Text>
                                            </View>
                                            <View style={styles.exerciseCountContainer}>
                                                <Image source={require('../assets/Training/exerciseImage.png')} style={styles.exerciseTime} />
                                                <Text style={styles.exerciseNumber}>10 Exercices</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.itemImage}>
                                        <TouchableOpacity onPress={() => toggleStar(index)} style={styles.star}>
                                            <FontAwesome name={starredItems[index] ? "star" : "star-o"} size={30} color="#FFA500" />
                                        </TouchableOpacity>
                                        <Image source={require('../assets/Training/entrainement.png')} style={styles.image} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#FFF9F2",
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: '#004080',
    },
    underline: {
        height: 2,
        backgroundColor: '#FFA500',
        width: 90,
        marginBottom: 20,
        alignSelf: 'center',
    },
    itemContainer: {
        padding: 10,
        borderRadius: 5,
    },
    bouton: {
        backgroundColor: "#FFF9F2",
        paddingVertical: 50,
        paddingLeft: 20,
        borderRadius: 30,
        width: '100%',
        height: 115,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    item: {
        flexDirection: 'row',
    },
    itemTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#004080',
        paddingRight: 20,
        paddingTop: 10,
    },
    itemCountContainer: {
        marginTop: 10,
        width: '50%',
    },
    itemImage: {
        flex: 1,
        position: 'relative',
        alignItems: 'flex-end',
        width: '50%',
    },
    image: {
        height: 115,
        width: "100%",
        paddingLeft: 30,
    },
    star: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    imageTime: {
        height: 15,
        width: 15,
        marginRight: 5,
    },
    timeCountContainer: {
        flexDirection: 'row',
        width: "100%",
        marginBottom: 10,
    },
    exerciseCountContainer: {
        flexDirection: 'row',
        width: "100%",
    },
    exerciseTime: {
        height: 15,
        width: 15,
        marginRight: 5,
    },
});
