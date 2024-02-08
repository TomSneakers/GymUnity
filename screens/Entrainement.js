import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button } from 'react-native';

export default function Entrainement({ navigation }) {
    const [trainings, setTrainings] = useState([]);
    // const API_URL = 'http://localhost:3000';
    // useEffect(() => {
    //     fetch(`${API_URL}/training`)
    //         .then(response => response.json())
    //         .then(data => setTrainings(data))
    //         .catch(error => console.error('Erreur:', error));
    // }, []);

    return (
        <View>
            <Text>Entrainements</Text>
            <FlatList
                data={trainings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.date}</Text>
                        <Text>{item.time}</Text>
                    </View>
                )}
            />
            <Button
                title="Creer un entrainement"
                onPress={() => navigation.navigate('MainTabs', { screen: 'CreateTraining' })}
            />
        </View>
    );
}