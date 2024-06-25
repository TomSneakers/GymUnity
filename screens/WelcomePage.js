// Page d'entrer de l'application 
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Bouton from '../components/Bouton';



const WelcomePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />

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
        backgroundColor: '#FFF9F2',
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
        position: 'relative',
        left: 0,
        top: 50,
        transform: [{ translateX: -100 }, { translateY: -50 }],
    },
});

export default WelcomePage;