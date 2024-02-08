// Composant pour ajouter un exercice cardio
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function AddCardioExercise({ onAddCardioExercise }) {
    const [exerciseName, setExerciseName] = useState('');
    const [duration, setDuration] = useState('');

    const handleAddCardioExercise = () => {
        onAddCardioExercise(exerciseName, duration);
        setExerciseName('');
        setDuration('');
    };

    return (
        <View>
            <TextInput
                placeholder="Nom de l'exercice"
                value={exerciseName}
                onChangeText={setExerciseName}
            />
            <TextInput
                placeholder="Durée (en minutes)"
                value={duration}
                onChangeText={setDuration}
                keyboardType="numeric"
            />
            <Button title="Ajouter" onPress={handleAddCardioExercise} />
        </View>
    );
}
export default AddCardioExercise;
