// Page d'entrer de l'application 
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bouton from '../components/Bouton';



const WelcomePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/Login/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>C'est partie pour de nouveaux entrainements !</Text>
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
        backgroundColor: '#EDEDED',
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
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 600,
        height: 600,
    },
});

export default WelcomePage;