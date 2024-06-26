import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

const Minuteur = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive || timeLeft === 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft <= 10 && timeLeft > 0) {
                    Speech.speak(`${timeLeft}`, { language: 'fr-FR' });
                }
                return timeLeft - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isActive, timeLeft]);

    const startTimer = () => {
        setIsActive(true);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(initialTime);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>{timeLeft} secondes restantes</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={startTimer}>
                    <Text style={styles.buttonText}>Démarrer le minuteur</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={resetTimer}>
                    <Text style={styles.buttonText}>Réinitialiser</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    timeText: {
        fontSize: 24,
        color: '#022150',
        marginBottom: 20,
        fontFamily: 'Inter-Black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Inter-Black',
    },
});

export default Minuteur;
