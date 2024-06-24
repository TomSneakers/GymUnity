// LoginPage.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import signIn, { authService } from "../service/authService";
import Bouton from "../components/Bouton";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Ionicons";
import { useUser } from "../context/Context"; // Import du hook useUser

const LoginPage = ({ navigation }) => {
	const { updateUser } = useUser();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};
	const [fontsLoaded, fontError] = useFonts({
		"Inter-Black": require("../assets/fonts/Inter-black.ttf"),
	});
	if (!fontsLoaded && !fontError) {
		return null;
	}

	// Exemple d'affichage d'un message d'erreur
	async function handleSubmit() {
		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			Alert.alert("Erreur", "Veuillez entrer un email valide.");
			return;
		}

		if (!password) {
			Alert.alert("Erreur", "Veuillez entrer votre mot de passe.");
			return;
		}
		const res = await authService.signIn(email, password);
		//	.then(() => {
		await updateUser({ email })
		navigation.navigate("MainTabs");
		console.log("Connexion réussie");
		//	})
		/* 			.catch((error) => {
						if (error.response && error.response.status === 404) {
							// Cas où l'email n'est pas trouvé dans la base de données
							console.log("Aucun compte trouvé pour cet email.");
							Alert.alert("Erreur", "Aucun compte trouvé pour cet email.");
						} else {
							console.log("Erreur lors de la connexion:", error);
							Alert.alert("Erreur", "Erreur lors de la connexion.");
						}
					}); */
	}


	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Text style={styles.text}>Connexion</Text>

				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder="xxxxx@xxxxx.com"
					placeholderTextColor="#969AA8"
					onChangeText={setEmail}
					value={email}
				/>

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
			</View>
			<View style={styles.buttonContainer}>
				<Bouton
					title="Se connecter"
					onPress={handleSubmit}
					disabled={!email || !/\S+@\S+\.\S+/.test(email) || !password}
					style={styles.bouton}
				/>
				<TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate("ForgotPasswordPage")}>
					<Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.signupLink} onPress={() => navigation.navigate("SignupPage")}>
					<Text style={styles.signupLinkText}>Vous n’avez pas de compte ?</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

// styles et autres fonctions comme togglePasswordVisibility restent inchangés



const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},

	text: {
		fontSize: 24,
		color: "#022150",
		marginBottom: 20,
		fontFamily: "Inter-Black",
	},
	inputRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 40,
	},
	eyes: {
		position: "absolute",
		right: 10,
		top: 10,
	},
	label: {
		color: "black",
		fontFamily: "Inter-Black",
	},
	input: {
		height: 40,
		borderColor: "#A7A7A7",
		borderBottomWidth: 1,
		padding: 10,
		width: "100%",
		color: "#022150",
		fontWeight: "bold",
		marginBottom: 40,

	},
	inputContainer: {
		flex: 1,
		width: "100%",
		alignItems: "flex-start",
		justifyContent: "flex-end",
		marginTop: 300,
	},
	buttonContainer: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-end",
		marginBottom: 36,

	},
	bouton: {
		width: "100%",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
	forgotPassword: {
		marginTop: 10,
	},
	forgotPasswordText: {
		color: "#004080",
		fontWeight: "light",
		fontFamily: "Inter-Black",
	},
	signupLink: {
		marginTop: 20,
	},
	signupLinkText: {
		color: "#004080",
		fontWeight: "bold",

	},
});

export default LoginPage;
