import React, {useState} from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {trainingService} from "../service/trainingService";
import {ExerciseConfigurator} from "./createTraining/exerciseConfigurator/exerciseConfigurator";

export default function CreateTraining() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [exercises, setExercises] = useState([{}]);

    function handleExerciseChange(edited) {
        const newExercises = exercises.map((exercise, index) => {
            if (index === edited.index) {
                return edited;
            }
            return  exercise;
        });
        setExercises(newExercises);
    }

    function handleAddExercise() {
        setExercises([...exercises, {}]);
    }

    const handleRemove = (index) => {
        setExercises(exercises.filter((_, exerciseIndex) => exerciseIndex !== index));
    };
    const handleCreateTraining = () => {
        trainingService.createTraining({title, description, exercises})
                       .catch(() => Alert.alert('Erreur', "Erreur lors de la création de l'entraînement"));
    };

    return (
        <View>
            <Text>Création d'entraînement</Text>
            <TextInput placeholder="Titre" value={title} onChangeText={setTitle}/>
            <TextInput placeholder="Description" value={description} onChangeText={setDescription}/>
            {exercises.map((exercise, index) => <ExerciseConfigurator key={index}
                                                                      index={index}
                                                                      exercise={exercise}
                                                                      onChange={handleExerciseChange}
                                                                      onRemove={handleRemove}/>)}
            <Button title={"Ajouter un exercice"} onPress={handleAddExercise}/>
            <Button title="Créer" onPress={handleCreateTraining}/>
        </View>
    );
}

