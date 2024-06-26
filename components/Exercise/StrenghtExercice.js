//Composant StrenghtCount qui permet d'afficher le nombre de series et le nombre de répétitions, le nom de l'exercice ainsi que le poid à soulever

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StrenghtExercice({ name, series, repetitions, weight }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.itemContainer}>
                <Text style={styles.series}>Nombre de séries :</Text>
                <Text style={styles.seriesNumber}>{series}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.repetitions}>Nombre de répétitions : </Text>
                <Text style={styles.repetitionsNumber}>{repetitions}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Text style={styles.weight}>Poids à soulever :</Text>
                <Text style={styles.weightNumber}>{weight} Kg</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        width: '120%',
        alignSelf: 'center',
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFA500",
        marginBottom: 10,
    },
    series: {
        fontSize: 20,
    },
    repetitions: {
        fontSize: 20,
    },
    weight: {
        fontSize: 20,
    },
    seriesNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#004080",
    },
    repetitionsNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#004080",
    },
    weightNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#004080",
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
});