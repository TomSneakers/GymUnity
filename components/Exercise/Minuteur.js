import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import FontAwesome6 from '@expo/vector-icons/build/FontAwesome6';

const Minuteur = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime * 1000);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (!isActive || timeLeft === 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((timeLeft) => {
                const secondsLeft = Math.floor(timeLeft / 1000);
                if (secondsLeft <= 10 && secondsLeft > 0) {
                    Speech.speak(`${secondsLeft}`, { language: 'fr-FR' });
                }
                return timeLeft - 10;
            });
        }, 10);

        return () => clearInterval(intervalId);
    }, [isActive, timeLeft]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(initialTime * 1000);
    };

    const seconds = Math.floor(timeLeft / 1000);
    const milliseconds = Math.floor((timeLeft % 1000) / 10); // Diviser par 10 pour obtenir 2 chiffres
    const displayTimeLeft = `${seconds}:${milliseconds.toString().padStart(2, '0')}`;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleTimer} style={styles.boutonStart}>
                {/* <Text style={styles.textBouton}>{isActive ? 'Pause' : 'Démarrer'}</Text> */}
                <Text style={styles.timeLeft}>{displayTimeLeft}</Text>
                <FontAwesome6 name={isActive ? 'pause' : 'play'} size={50} color="#FFA500" />
            </TouchableOpacity>
            <TouchableOpacity onPress={resetTimer} style={styles.boutonReset}>
                <Text style={styles.textBouton}>Réinitialiser</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boutonStart: {
        backgroundColor: 'transparent',
        borderWidth: 10,
        borderColor: '#FFA500',
        height: 250,
        width: 250,
        justifyContent: 'center',
        borderRadius: 200,
        alignItems: 'center',
        marginVertical: 40,
    },
    boutonReset: {
        backgroundColor: '#FFA500',
        padding: 10,
        borderRadius: 10,
    },
    textBouton: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    timeLeft: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFA500',
    },
});

export default Minuteur;
