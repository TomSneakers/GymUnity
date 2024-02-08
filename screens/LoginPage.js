// LoginPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    // LoginPage.js
    const handleSubmit = () => {
        // Vérifie si l'identifiant et le mot de passe sont "test"
        if (username === 'Test' && password === 'test') {
            // Redirige vers le navigateur supérieur (MainTabs)
            navigation.navigate('MainTabs');
        } else {
            // Affiche une alerte si les informations sont incorrectes
            Alert.alert('Erreur', 'Identifiant ou mot de passe incorrect.');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Connexion</Text>
            <TextInput
                style={styles.input}
                placeholder="Identifiant"
                onChangeText={handleUsernameChange}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                onChangeText={handlePasswordChange}
                value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPasswordPage')}>
                <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupLink} onPress={() => navigation.navigate('SignupPage')}>
                <Text style={styles.signupLinkText}>Inscription</Text>
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
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 10,
    },
    forgotPasswordText: {
        color: 'blue',
    },
    signupLink: {
        marginTop: 20,
    },
    signupLinkText: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default LoginPage;
