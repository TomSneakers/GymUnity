// Page d'entrer de l'application 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bouton from '../components/Bouton';


const EnterPage = () => {
    const navigation = useNavigation();

    return (
        // Fond noir pour la page d'entrée
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.heading}>C'est partie pour de nouvelle aventure</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Bouton title="Commencer" onPress={() => navigation.navigate('AuthStack')} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: 'white',
    },
    textContainer: {
        marginBottom: 20,
        alignItems: 'center',

    },
    buttonContainer: {
        marginBottom: 36,
        alignItems: 'center',
    },
    heading: {

        fontSize: 24,
        fontWeight: 'bold',
        color: 'grey',
        textAlign: 'center',
    },
});

export default EnterPage;