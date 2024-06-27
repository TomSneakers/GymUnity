import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/Context"; // Import du hook useUser
import { SafeAreaView } from 'react-native-safe-area-context';
import MainMenu2 from "../components/MainMenu2";


const ProfilePage = () => {
	const { user } = useUser();
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
			<MainMenu2 />
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.container} />
				<View style={styles.cardBlue} />
				<View style={styles.profileContainer}>
					<Image source={require('../assets/photodeprofil/photodeprofil1.png')} style={styles.profileImage} />
					<Text style={styles.profileName}>Madison Smith</Text>
					<Text style={styles.profileEmail}>{user.email}</Text>
					<Text style={styles.profileBirthday}>Birthday: April 1st</Text>
				</View>
				<View style={styles.container} />
				<View style={styles.statsContainer}>
					<View style={styles.statBox}>
						<Text style={styles.statValue}>75 Kg</Text>
						<Text style={styles.statLabel}>Weight</Text>
					</View>
					<View style={styles.statBox}>
						<Text style={styles.statValue}>28</Text>
						<Text style={styles.statLabel}>Years Old</Text>
					</View>
					<View style={styles.statBox1}>
						<Text style={styles.statValue}>1.65 CM</Text>
						<Text style={styles.statLabel}>Height</Text>
					</View>
				</View>
				<View style={styles.menuContainer}>
					<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("EditProfilePage")}>
						<View style={styles.menuItemIcon}>
							<Image source={require('../assets/icon/decision-making_16330913.png')} style={styles.icon} />
						</View>
						<Text style={styles.menuItemText}>Edit Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("EditProfilePage")}>
						<View style={styles.menuItemIcon}>
							<Image source={require('../assets/icon/favorite_222298.png')} style={styles.icon} />
						</View>
						<Text style={styles.menuItemText}>Favorite</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("PrivacyPolicy")}>
						<View style={styles.menuItemIcon}>
							<Image source={require('../assets/icon/shield_109123.png')} style={styles.icon} />
						</View>
						<Text style={styles.menuItemText}>Privacy Policy</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("SettingsPage")}>
						<View style={styles.menuItemIcon}>
							<Image source={require('../assets/icon/setting_4255672.png')} style={styles.icon} />
						</View>
						<Text style={styles.menuItemText}>Settings</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("EditProfilePage")}>
						<View style={styles.menuItemIcon}>
							<Image source={require('../assets/icon/help_2081580.png')} style={styles.icon} />
						</View>
						<Text style={styles.menuItemText}>Help</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
						<View style={styles.menuItemIcon}>
							<Image source={require('../assets/icon/icon.logout.png')} style={styles.icon} />
						</View>
						<Text style={styles.menuItemText}>Logout</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	cardBlue: {
		position: 'absolute',
		zIndex: -1,
		width: '100%',
		height: 300,
		top: -65,
		display: 'block',
		backgroundColor: '#004080',
	},
	safeArea: {
		flex: 1,
		backgroundColor: '#f0f0f0',
	},
	scrollContainer: {
		flexGrow: 1,
		paddingVertical: 20,
	},
	profileContainer: {
		backgroundColor: 'transparent',
		alignItems: 'center',
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	profileName: {
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 5,
		color: "white",

	},
	profileEmail: {
		color: 'white',
	},
	profileBirthday: {
		color: 'gray',
		color: 'white',
	},
	statsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#FFA500',
		paddingVertical: 10,
		borderRadius: 20,
		marginVertical: 15,
		marginHorizontal: 15,
	},
	statBox: {
		alignItems: 'center',
		borderEndColor: '#FFF9F2',
		borderEndWidth: 1,
		paddingRight: 30,
	},
	statBox1: {
		alignItems: 'center',
		borderEndColor: '#FFF9F2',
	},
	statValue: {
		color: '#FFF9F2',
		fontWeight: 'bold',
	},
	statLabel: {
		color: '#FFF9F2',
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

export default ProfilePage;