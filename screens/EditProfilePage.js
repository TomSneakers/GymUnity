import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const EditProfilePage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [password, setPassword] = useState('');

    const handleSave = () => {
        // Logique pour enregistrer les modifications
        console.log('Enregistrer les modifications:', { name, email, phone, weight, age, height, password });
        // Naviguer de retour au profil après enregistrement
        navigation.goBack();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput 
                    style={styles.input} 
                    value={name} 
                    onChangeText={setName} 
                    placeholder="Enter your name" 
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input} 
                    value={email} 
                    onChangeText={setEmail} 
                    placeholder="Enter your email" 
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone</Text>
                <TextInput 
                    style={styles.input} 
                    value={phone} 
                    onChangeText={setPhone} 
                    placeholder="Enter your phone number" 
                    keyboardType="phone-pad"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Weight (kg)</Text>
                <TextInput 
                    style={styles.input} 
                    value={weight} 
                    onChangeText={setWeight} 
                    placeholder="Enter your weight" 
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Height (cm)</Text>
                <TextInput 
                    style={styles.input} 
                    value={height} 
                    onChangeText={setHeight} 
                    placeholder="Enter your height" 
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Age</Text>
                <TextInput 
                    style={styles.input} 
                    value={age} 
                    onChangeText={setAge} 
                    placeholder="Enter your age" 
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input} 
                    value={password} 
                    onChangeText={setPassword} 
                    placeholder="Enter your password" 
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFF9F2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    saveButton: {
        backgroundColor: '#FFA500',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default EditProfilePage;
