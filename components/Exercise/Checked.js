// Composant qui propose une coche sur un exercice, et si la coche est cochée, l'exercice est validé.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Checked({ exercise }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('ExerciseDetails', { exercise })}
        >
            <Text style={styles.text}>{exercise.title}</Text>
            {exercise.checked && <Text style={styles.checked}>✓</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E1EF',
    },
    text: {
        fontSize: 18,
    },
    checked: {
        fontSize: 18,
        color: 'green',
    },
});