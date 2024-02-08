import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Button, Alert} from 'react-native';
import {trainingService} from "../service/trainingService";

export default function Entrainement({navigation}) {
    const [trainings, setTrainings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        trainingService.getTrainings()
                       .then(setTrainings)
                       .catch(() => Alert.alert('Erreur', 'Erreur lors de la récupération des entrainements'))
                       .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <Text>Chargement...</Text>
    }

    return (
        <View>
            <Text>Entrainements</Text>
            <FlatList
                data={trainings}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.exerciseCount}</Text>
                    </View>
                )}
            />
            <Button
                title="Creer un entrainement"
                onPress={() => navigation.navigate('MainTabs', {screen: 'CreateTraining'})}
            />
        </View>
    );
}