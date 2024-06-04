import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useMe } from "../components/UseMe";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const ProfilePage = ({ route }) => {
	const { me, loading } = useMe();
	const navigation = useNavigation();

	if (loading) {
		return <Text>Loading...</Text>;
	}

	if (!me) {
		return <Text>Erreur lors du chargement des données utilisateur.</Text>;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Profile</Text>
			<Text style={styles.description}>Hello {me.email}</Text>
			<Button
				title="Se déconnecter"
				onPress={() => {
					SecureStore.deleteItemAsync("accessToken");
					SecureStore.deleteItemAsync("refreshToken");
					navigation.navigate("WelcomePage");
				}}
			/>
		</View>
	);
};


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
