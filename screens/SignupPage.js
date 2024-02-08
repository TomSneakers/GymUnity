// SignupPage.js
import React, {useState} from 'react';
import {authService} from '../service/authService';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


const SignupPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        authService.signUp(email, username, password)
                   .then(() => navigation.navigate('LoginPage'));
    }

    const goLogin = () => {
        navigation.navigate('LoginPage');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Inscription</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail}/>
            <TextInput style={styles.input} placeholder="Utilisateur" onChangeText={setUsername}/>
            <TextInput style={styles.input} placeholder="Mot de passe" secureTextEntry={true}
                       onChangeText={setPassword}/>
            <TextInput style={styles.input} placeholder="Confirmation de mot de passe" secureTextEntry={true}/>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
