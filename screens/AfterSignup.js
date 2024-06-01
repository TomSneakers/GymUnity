//page apres connexion avec du texte et un bouton qui redirige vers la page de connexion

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Bouton from '../components/Bouton';
import { useFonts } from 'expo-font';


const AfterSignup = ({ navigation }) => {
    const [fontsLoaded, fontError] = useFonts({
        'Inter-Black': require('../assets/fonts/Inter-black.ttf'),
    });
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <>
            <View style={styles.container}>
                <View styles={styles.imageContainer}>
                    <Image source={require('../assets/coche.png')} style={{ width: 450, height: 450, alignSelf: 'center' }} />
                </View>
                <Text style={styles.textFelicitation}>Félicitations !</Text>
                <Text style={styles.text}>Votre inscription sur notre plateforme a été un succès. Nous sommes ravis de vous compter parmi nos membres.</Text>
                <Text style={styles.text1}>Pour continuer, veuillez vous connecter en utilisant vos identifiants.</Text>
                <View style={styles.buttonContainer}>
                    <Bouton title="Se connecter" onPress={() => navigation.navigate('LoginPage')} style={styles.button} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 100,
        paddingHorizontal: 50,
    },
    textFelicitation: {
        fontSize: 24,
        color: '#022150',
        marginBottom: 20,
        fontFamily: 'Inter-Black',
    },
    text: {
        fontSize: 20,
        color: '#022150',
        marginBottom: 20,
        fontFamily: 'Inter-Black',
    },
    text1: {
        fontSize: 18,
        color: '#969696',
        marginBottom: 20,
        fontFamily: 'Inter-Black',
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 36,

    },
});

export default AfterSignup;
