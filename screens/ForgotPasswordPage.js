// ForgotPasswordPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleResetPassword = () => {
        // Vérifiez si l'e-mail est valide avant de procéder
        if (!validateEmail(email)) {
            Alert.alert('Erreur', 'Veuillez saisir une adresse e-mail valide.');
            return;
        }

        // Ajoutez ici la logique pour réinitialiser le mot de passe (par exemple, envoyer un e-mail de réinitialisation)

        // Affiche une alerte pour indiquer que la demande de réinitialisation a été envoyée
        Alert.alert('Réinitialisation du mot de passe', `Un e-mail de réinitialisation a été envoyé à ${email}.`);

        // Redirige vers la page de connexion
        navigation.navigate('LoginPage');
    };

    // Fonction pour valider un e-mail
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={styles.backText}>Retour</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Mot de passe oublié</Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse e-mail"
                onChangeText={handleEmailChange}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    backText: {
        color: 'blue',
        fontWeight: 'bold',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ForgotPasswordPage;
