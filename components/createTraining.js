import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CreateTraining() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [exercises, setExercises] = useState(['']);

    const handleCreateTraining = () => {
        // Votre logique de création d'entraînement ici
    };

    const handleAddExercise = () => {
        setExercises([...exercises, '']);
    };

    const handleExerciseChange = (text, index) => {
        const newExercises = [...exercises];
        newExercises[index] = text;
        setExercises(newExercises);
    };

    const handleRemoveExercise = (index) => {
        const newExercises = [...exercises];
        newExercises.splice(index, 1);
        setExercises(newExercises);
    };

    return (
        <View>
            <Text>Création d'entraînement</Text>
            <TextInput placeholder="Titre" value={title} onChangeText={setTitle} />
            <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
            <TextInput placeholder="Date" value={date} onChangeText={setDate} />
            <TextInput placeholder="Heure" value={time} onChangeText={setTime} />
            <Text>Ajouter Exercices</Text>
            {exercises.map((exercise, index) => (
                <View key={index}>
                    <TextInput
                        placeholder="Nom de l'exercice"
                        value={exercise}
                        onChangeText={(text) => handleExerciseChange(text, index)}
                    />
                    <Button title="-" onPress={() => handleRemoveExercise(index)} />
                </View>
            ))}
            <Button title="Ajouter" onPress={handleAddExercise} />
            <Button title="Créer" onPress={handleCreateTraining} />
        </View>
    );
}