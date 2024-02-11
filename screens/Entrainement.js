import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, Alert, StyleSheet } from 'react-native';
import { trainingService } from "../service/trainingService";

export default function Entrainement({ navigation }) {
    const [trainings, setTrainings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        trainingService.getTrainings()
            .then(setTrainings)
            .catch((e) => Alert.alert('Erreur', e))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entrainements</Text>
            <FlatList
                data={trainings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemCount}>{item.exerciseCount}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
        top: 80,
        marginBottom: 180,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
    },
    itemCount: {
        fontSize: 12,
        color: '#999',
    },
});