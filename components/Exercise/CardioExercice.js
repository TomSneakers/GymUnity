// Composant CardioExercice qui permet d'afficher le nom de l'exercice et la durée de l'exercice ainsi que de mettre le composoant Minuteur

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Minuteur from './Minuteur';

export default function CardioExercice({ name, duration }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.itemContainer}>
                <Text style={styles.duration}>Durée de l'exercice :</Text>
                <Text style={styles.durationNumber}>{duration} secondes</Text>
            </View>
            <View style={styles.itemContainer}>
                <Minuteur initialTime={duration} />
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
    duration: {
        fontSize: 20,
    },
    durationNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#004080",
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});