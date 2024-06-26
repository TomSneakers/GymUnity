import React, { useState } from "react";
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Minuteur from "../components/Exercise/Minuteur";
import StrenghtExercice from "../components/Exercise/StrenghtExercice";
import CardioExercice from "../components/Exercise/CardioExercice";
import { useNavigation } from '@react-navigation/native';

export default function EntrainementDetails() {
    const [isActive, setIsActive] = useState(false);
    const route = useRoute();
    const { training } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.retour} onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back" size={24} color="orange" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={isActive ? styles.activeEdit : styles.edit}
                            onPress={() => setIsActive(!isActive)}
                        >
                            <Text style={isActive ? styles.activeTitleEdit : styles.editTitle}>Modifier</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>{training.title}</Text>
                    <View style={styles.underline} />
                    <Text style={styles.description}>{training.description}</Text>
                    <Text style={styles.itemCount}>Nombre d'exercices:
                        {training.exercises.length}
                    </Text>

                    {training.exercises.map((exercise, index) => (
                        <View key={index} style={styles.itemContainer}>
                            {exercise.type === 'Strenght' ? (
                                <StrenghtExercice name={exercise.name} series={exercise.series} repetitions={exercise.repetitions} weight={exercise.weight} />
                            ) : exercise.type === 'Cardio' ? (
                                <CardioExercice name={exercise.name} duration={exercise.duration} />
                            ) : null}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF9F2',
        height: '100%',
    },
    ScrollView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginTop: -10,
        marginBottom: 50,
        justifyContent: 'space-between',
    },
    edit: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginRight: -20,
    },
    activeEdit: {
        color: "#004080",
        borderColor: "#004080",
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginRight: -20,
    },
    editTitle: {
        fontSize: 20,
        color: 'orange',
        fontFamily: 'Inter-Black',
    },
    activeTitleEdit: {
        fontSize: 20,
        color: '#004080',
        fontFamily: 'Inter-Black',
    },
    retour: {
        marginLeft: -30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 50,
        paddingHorizontal: 50,
    },
    title: {
        fontSize: 24,
        color: '#022150',
        marginBottom: 20,
        fontFamily: 'Inter-Black',
    },
    underline: {
        borderBottomColor: '#022150',
        borderBottomWidth: 2,
        width: 50,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    itemCount: {
        fontSize: 14,
        color: '#999',
        marginBottom: 20,
    },

    itemTitle: {
        fontSize: 20,
        color: '#022150',
        marginBottom: 10,
        fontFamily: 'Inter-Black',
    },
    itemDetail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    minuteur: {
        marginTop: 20,
    },
    repos: {
        marginTop: 20,
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '150%',
        alignSelf: 'center',
    },
});
