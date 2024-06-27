import React, { useState } from "react";
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Minuteur from "../components/Exercise/Minuteur";
import StrenghtExercice from "../components/Exercise/StrenghtExercice";
import CardioExercice from "../components/Exercise/CardioExercice";
import { useNavigation } from '@react-navigation/native';
import HeaderExercise from "../components/Exercise/HeaderExercise";


export default function EntrainementDetails() {
    const [isActive, setIsActive] = useState(false);
    const route = useRoute();
    const { training } = route.params;
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.container}>
                    <HeaderExercise title={training.title} description={training.description} isActive={isActive} setIsActive={setIsActive} training={training} route={route} navigation={navigation} />
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
        backgroundColor: '#F0F0F0',
        height: '100%',
    },
    ScrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 50,
        paddingHorizontal: 50,
    },
});
