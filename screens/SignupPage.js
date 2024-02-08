// SignupPage.js
import React, { useState } from 'react';
import { authService } from '../service/authService';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Bouton from '../components/Bouton';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';


const SignupPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };



    const [fontsLoaded, fontError] = useFonts({
        'Inter-Black': require('../assets/fonts/Inter-black.ttf'),
    });
    if (!fontsLoaded && !fontError) {
        return null;
    }



    function handleSubmit() {
        if (password !== confirmPassword) {
            Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
            return;
        }

        authService.signUp(email, password)
            .then(() => navigation.navigate('MainTabs'))
            .catch((e) => Alert.alert('Erreur', JSON.stringify(e)));
    }


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
                    <Text style={styles.text}>Inscription</Text>
                    <Text style={styles.label}>Nom & Prénom</Text>
                    <TextInput style={styles.input} placeholder="Rocky Balboa" placeholderTextColor="#969AA8" onChangeText={setUsername} />
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder="xxxxx@xxxxx.com" placeholderTextColor="#969AA8" onChangeText={setEmail} />


                    <Text style={styles.label}>Mot de passe</Text>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor="#969AA8"
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyes}>
                            <Icon name={isPasswordVisible ? "eye-off" : "eye"} size={24} color="orange" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>Confirmation de mot de passe</Text>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor="#969AA8"
                            secureTextEntry={!isConfirmPasswordVisible}
                            onChangeText={setConfirmPassword}
                        />
                        <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyes}>
                            <Icon name={isConfirmPasswordVisible ? "eye-off" : "eye"} size={24} color="orange" />
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={styles.buttonContainer}>
                    <Bouton title="Inscription" onPress={handleSubmit} style={styles.bouton} />
                    <TouchableOpacity style={styles.loginLink} onPress={goLogin}>
                        <Text style={styles.buttonText}>Vous êtes déja inscrit ? </Text>
                    </TouchableOpacity>
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
        marginTop: 350,
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
        color: 'white',
        fontWeight: 'light',
        color: '#004080',
    },
    loginLink: {
        marginTop: 20,

    },
});


export default SignupPage;
