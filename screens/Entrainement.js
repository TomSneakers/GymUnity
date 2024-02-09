import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, Alert } from 'react-native';
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
        <View>
            <Text>Entrainements</Text>
            <FlatList
                data={trainings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.exerciseCount}</Text>
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