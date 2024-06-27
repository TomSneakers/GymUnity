import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MainMenu2 from '../components/MainMenu2';
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/Context"; // Import du hook useUser
import { SafeAreaView } from 'react-native-safe-area-context';

const posts = [
    {
        id: '1',
        user: 'John Doe',
        type: 'Cardio',
        result: '5 km in 30 minutes',
        image: require('../assets/Login/coche.png'),
    },
    {
        id: '2',
        user: 'Jane Smith',
        type: 'Muscle',
        result: '50 push-ups',
        image: require('../assets/Login/coche.png'),
    },
    // Ajoutez plus de posts ici
];

const PostItem = ({ post }) => (
    <View style={styles.postContainer}>
        <View style={styles.postHeader}>
            <Text style={styles.postUser}>{post.user}</Text>
        </View>
        <Image source={post.image} style={styles.postImage} />
        <View style={styles.postContent}>
            <Text style={styles.postType}>{post.type}</Text>
            <Text style={styles.postResult}>{post.result}</Text>
        </View>
    </View>
);

const HomePage = () => {
    const { user } = useUser(); // Utilisation du hook useUser pour accéder aux données de l'utilisateur
    const navigation = useNavigation();

    const handleLogout = async () => {
        await SecureStore.deleteItemAsync("accessToken");
        await SecureStore.deleteItemAsync("refreshToken");
        await SecureStore.deleteItemAsync("userData"); // Supprimer les données utilisateur de SecureStore lors de la déconnexion
        navigation.navigate("WelcomePage");
    };

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>Chargement...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={require('../assets/hompage.jpeg')} style={styles.profileImage} />
                <Image source={require('../assets/hompage.jpeg')} style={styles.profileImage} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        height: '100%',
    },
    scrollContainer: {
        flexGrow: 1,
    },
});

export default HomePage;
