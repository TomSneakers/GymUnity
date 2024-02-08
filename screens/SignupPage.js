// SignupPage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const SignupPage = ({ navigation }) => {
    const goLogin = () => {
        navigation.navigate('LoginPage');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Inscription</Text>
            <TextInput style={styles.input} placeholder="Mail" />
            <TextInput style={styles.input} placeholder="Utilisateur" />
            <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Confirmation de mot de passe" secureTextEntry={true} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Inscription</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginLink} onPress={goLogin}>
                <Text style={styles.loginLinkText}>Vous êtes déja inscrit ? Connecté vous !!</Text>
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
    loginLink: {
        marginTop: 20,
    },
    loginLinkText: {
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default SignupPage;
