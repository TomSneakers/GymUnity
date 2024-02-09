import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import ChooseExercise from './ChooseExercice';
import AddStandardExercise from './ExerciseStandard';
import AddCardioExercise from './ExerciseCardio';
import { trainingService } from "../service/trainingService";

export default function CreateTraining() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [exercises, setExercises] = useState([]);
    const [selectedExerciseType, setSelectedExerciseType] = useState('standard');

    const handleCreateTraining = () => {
        trainingService.createTraining({ title, description, exercises })
            .catch((e) => Alert.alert('Erreur', "Erreur lors de la création de l'entraînement"));
    };

    const handleSelectExerciseType = (type) => {
        setSelectedExerciseType(type);
    };

    const handleAddStandardExercise = (exerciseName) => {
        setExercises([...exercises, { type: 'standard', name: exerciseName }]);
    };

    const handleAddCardioExercise = (exerciseName) => {
        setExercises([...exercises, { type: 'cardio', name: exerciseName }]);
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
                    {exercise.type === 'cardio'}
                    <Button title="-" onPress={() => handleRemoveExercise(index)} />
                </View>
            ))}
            <Button title="Créer" onPress={handleCreateTraining} />
        </View>
    );
}