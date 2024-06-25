import React, { useState } from 'react';
import { Alert, TouchableOpacity, Image, Text, TextInput, View, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
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
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.title}>Création d'entraînement</Text>
                        <TextInput style={styles.input} placeholder="Titre" placeholderTextColor={"#004080"} value={title} onChangeText={setTitle} />
                        <TextInput style={styles.input} placeholder="Description" placeholderTextColor={"#004080"} value={description} onChangeText={setDescription} />
                    </View>
                    {exercises.map((exercise, index) => (
                        <ExerciseConfigurator
                            key={index}
                            index={index}
                            exercise={exercise}
                            onChange={handleExerciseChange}
                            onRemove={handleRemove}
                        />
                    ))}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity title={"Ajouter un exercice"} onPress={handleAddExercise} >
                            <Image
                                source={require("../assets/plus.png")}
                                style={styles.buttonImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} title="Créer" onPress={handleCreateTraining} >
                            <Text style={styles.buttonText}>Créer</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#E0E1EF',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        marginBottom: 20,
    },
    input: {
        height: 50,
        fontSize: 16,
        color: '#004080',
        backgroundColor: '#FFFFFF',  // Couleur de fond de l'input
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        // Ombre interne pour l'effet en creux
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1, // Décalage vers le bas pour l'effet en creux
        },
        shadowOpacity: 0.2, // Opacité de l'ombre
        shadowRadius: 3, // Flou de l'ombre
        elevation: 3, // Pour Android, simule l'effet d'élévation
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF9F2',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFF9F2',
        paddingBottom: 80, // Ajout de padding pour l'espace en bas
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#004080',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#004080',
        paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 50,
        width: '30%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonImage: {
        width: 55,
        height: 55,
    },
});
