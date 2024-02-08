import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ChooseExercise from './ChooseExercice';
import AddStandardExercise from './ExerciseStandard';
import AddCardioExercise from './ExerciseCardio';

export default function CreateTraining() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [exercises, setExercises] = useState([]);
    const [selectedExerciseType, setSelectedExerciseType] = useState('standard');

    const handleCreateTraining = () => {
        // Votre logique de création d'entraînement ici
    };

    const handleSelectExerciseType = (type) => {
        setSelectedExerciseType(type);
    };

    const handleAddStandardExercise = (exerciseName) => {
        setExercises([...exercises, { type: 'standard', name: exerciseName }]);
    };

    const handleAddCardioExercise = (exerciseName, duration) => {
        setExercises([...exercises, { type: 'cardio', name: exerciseName, duration: duration }]);
    };

    const handleRemoveExercise = (index) => {
        setExercises(exercises.filter((_, exerciseIndex) => exerciseIndex !== index));
    };

    return (
        <View>
            <Text>Création d'entraînement</Text>
            <TextInput placeholder="Titre" value={title} onChangeText={setTitle} />
            <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
            {/* <TextInput placeholder="Date" value={date} onChangeText={setDate} />
            <TextInput placeholder="Heure" value={time} onChangeText={setTime} /> */}

            <ChooseExercise onSelectExerciseType={handleSelectExerciseType} />
            {selectedExerciseType === 'standard' ? (
                <AddStandardExercise onAddStandardExercise={handleAddStandardExercise} />
            ) : (
                <AddCardioExercise onAddCardioExercise={handleAddCardioExercise} />
            )}
            <Text>Nombre d'exercices: {exercises.length}</Text>
            {exercises.map((exercise, index) => (
                <View key={index}>
                    <Text>Type: {exercise.type}</Text>
                    <Text>Nom: {exercise.name}</Text>
                    {exercise.type === 'cardio' && <Text>Durée: {exercise.duration} minutes</Text>}
                    <Button title="-" onPress={() => handleRemoveExercise(index)} />
                </View>
            ))}
            <Button title="Créer" onPress={handleCreateTraining} />
        </View>
    );
}