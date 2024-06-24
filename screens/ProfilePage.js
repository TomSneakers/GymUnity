// ProfilePage.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/Context"; // Import du hook useUser

const ProfilePage = ({ route }) => {
	const { user } = useUser(); // Utilisation du hook useUser pour accéder aux données de l'utilisateur
	const navigation = useNavigation();

	const handleLogout = async () => {
		await SecureStore.deleteItemAsync("accessToken");
		await SecureStore.deleteItemAsync("refreshToken");
		await SecureStore.deleteItemAsync("userData"); // Supprimer les données utilisateur de SecureStore lors de la déconnexion
		navigation.navigate("WelcomePage");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Profil</Text>
			{user ? (
				<Text style={styles.description}>Bonjour {user.email}</Text>
			) : (
				<Text style={styles.description}>Chargement...</Text>
			)}
			<Button
				title="Se déconnecter"
				onPress={handleLogout}
			/>
		</View>
	);
};

// styles restent inchangés



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		marginVertical: 10,
	},
	description: {
		fontSize: 16,
		textAlign: "center",
		marginVertical: 10,
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
		marginVertical: 20,
	},
	// ... (ajoute d'autres styles si nécessaire)
});

export default ProfilePage;
