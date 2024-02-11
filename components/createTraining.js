import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { trainingService } from "../service/trainingService";
import { ExerciseConfigurator } from "./createTraining/exerciseConfigurator/exerciseConfigurator";
import { StyleSheet } from "react-native";

export default function CreateTraining() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [exercises, setExercises] = useState([{}]);

    function handleExerciseChange(edited) {
        const newExercises = exercises.map((exercise, index) => {
            if (index === edited.index) {
                return edited;
            }
            return exercise;
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
        trainingService.createTraining({ title, description, exercises })
            .catch((e) => Alert.alert('Erreur', "Erreur lors de la création de l'entraînement"));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Création d'entraînement</Text>
            <TextInput style={styles.input} placeholder="Titre" value={title} onChangeText={setTitle} />
            <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
            {exercises.map((exercise, index) => <ExerciseConfigurator key={index}
                index={index}
                exercise={exercise}
                onChange={handleExerciseChange}
                onRemove={handleRemove} />)}
            <View style={styles.buttonContainer}>
                <Button title={"Ajouter un exercice"} onPress={handleAddExercise} />
                <Button title="Créer" onPress={handleCreateTraining} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        top: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});