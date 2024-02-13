// ForgotPasswordPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import Bouton from '../components/Bouton';
const ForgotPasswordPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };
    const handleResetPassword = () => {

        if (!validateEmail(email)) {
            Alert.alert('Erreur', 'Veuillez saisir une adresse e-mail valide.');
            return;
        }
        Alert.alert('Réinitialisation du mot de passe', `Un e-mail de réinitialisation a été envoyé à ${email}.`);

        navigation.navigate('LoginPage');
    };

    // Fonction pour valider un e-mail
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const goLogin = () => {
        navigation.navigate('LoginPage');
    };

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={goLogin}>
                    <Icon name="arrow-back" size={30} color="orange" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Mot de passe oublié</Text>

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="xxxxx@xxxxx.com"
                        placeholderTextColor="#969AA8"
                        onChangeText={handleEmailChange}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Bouton title="Réinitialiser le mot de passe" onPress={handleResetPassword} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',

        paddingTop: 100,
        paddingLeft: 20,

    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    text: {
        fontSize: 24,
        color: '#022150',
        marginBottom: 20,
        fontFamily: 'Inter-Black',
    },
    label: {
        color: 'black',
        fontFamily: 'Inter-Black',
    },
    eyes: {
        position: 'absolute',
        right: 10,
        top: 10,
    },

    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: '#A7A7A7',
        borderBottomWidth: 1,
        padding: 10,
        width: '100%',
        color: '#022150',
        fontWeight: 'bold',

        fontSize: 16,
        marginBottom: 40,

    },
    inputContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginTop: 0,
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 36,

    },
    bouton: {
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'light',
        color: '#004080',
    },
    loginLink: {
        marginTop: 20,

    },
});
export default ForgotPasswordPage;
