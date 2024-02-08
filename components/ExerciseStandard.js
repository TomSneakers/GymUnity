// Composant pour ajouter un exercice standard
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function AddStandardExercise({ onAddStandardExercise }) {
    const [exerciseName, setExerciseName] = useState('');

    const handleAddStandardExercise = () => {
        onAddStandardExercise(exerciseName);
        setExerciseName('');
    };

    return (
        <View>
            <TextInput
                placeholder="Nom de l'exercice"
                value={exerciseName}
                onChangeText={setExerciseName}
            />
            <Button title="Ajouter" onPress={handleAddStandardExercise} />
        </View>
    );
}
export default AddStandardExercise;
