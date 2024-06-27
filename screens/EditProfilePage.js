import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/Header';
import { useUser } from "../context/Context";

const EditProfilePage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useUser();

    const handleSave = () => {
        console.log('Enregistrer les modifications:', { name, email, phone, weight, age, height, password });
        navigation.goBack();
    };
    const cancelButton = () => {
        navigation.goBack();
    }

    return (


        <ScrollView contentContainerStyle={styles.scrollView}>
            <Header title="Edit Profile" color="#004080" />
            <View style={styles.profileContainer}>
                <Image source={require('../assets/photodeprofil/photodeprofil1.png')} style={styles.profileImage} />
            </View>
            <View style={styles.container}>
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
                <View style={styles.inputContainerButton}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={cancelButton}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardBlue: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: 230,
        display: 'block',
        backgroundColor: '#004080',
    },
    scrollView: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#F0F0F0',
    },
    container: {
        backgroundColor: '#F0F0F0',
        marginTop: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        height: 50,
    },
    saveButton: {
        backgroundColor: 'transparent',
        borderColor: '#004080',
        borderWidth: 5,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        width: "40%",
    },
    saveButtonText: {
        color: '#004080',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: '#FFA500',
        borderColor: 'transparent',
        borderWidth: 5,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        width: "40%",
    },
    inputContainerButton: {
        marginTop: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
        color: "white",

    },
    cardBlue: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: 230,
        display: 'block',
        backgroundColor: '#004080',
    },
});

export default EditProfilePage;
