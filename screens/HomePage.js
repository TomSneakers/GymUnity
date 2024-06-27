import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MainMenu2 from '../components/MainMenu2';
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/Context"; // Import du hook useUser
import { SafeAreaView } from 'react-native-safe-area-context';


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

    const handleBackPress = () => {
        navigation.navigate("HomePage");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <MainMenu2 />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    menuContainer: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    menuItemIcon: {
        marginRight: 20,
    },
    menuItemText: {
        fontSize: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default HomePage;
