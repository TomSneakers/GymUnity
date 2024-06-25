import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/Context"; // Import du hook useUser
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfilePage = () => {
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
			<ScrollView contentContainerStyle={styles.container}>

				<View style={styles.header}>
					<Text style={styles.headerText}>My Profile</Text>
				</View>
				<View style={styles.profileContainer}>
					<Image source={{ uri: '/Users/adamhocini/Documents/Isitech/B3/Gym/assets/photodeprofil.png' }} style={styles.profileImage} />
					<Text style={styles.profileName}>Madison Smith</Text>
					<Text style={styles.profileEmail}>{user.email}</Text>
					<Text style={styles.profileBirthday}>Birthday: April 1st</Text>
				</View>
				<View style={styles.statsContainer}>
					<View style={styles.statBox}>
						<Text style={styles.statValue}>75 Kg</Text>
						<Text style={styles.statLabel}>Weight</Text>
					</View>
					<View style={styles.statBox}>
						<Text style={styles.statValue}>28</Text>
						<Text style={styles.statLabel}>Years Old</Text>
					</View>
					<View style={styles.statBox}>
						<Text style={styles.statValue}>1.65 CM</Text>
						<Text style={styles.statLabel}>Height</Text>
					</View>
				</View>
				<View style={styles.menuContainer}>
					{menuItems.map((item, index) => (
						<TouchableOpacity key={index} style={styles.menuItem}>
							<View style={styles.menuItemIcon}>
								<Image source={item.icon} style={styles.icon} />
							</View>
							<Text style={styles.menuItemText}>{item.label}</Text>
						</TouchableOpacity>
					))}
					<TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
						<View style={styles.menuItemIcon}>
							<Image source={require('/Users/adamhocini/Documents/Isitech/B3/Gym/assets/icon/shield_109123.png')} style={styles.icon} />
						</View>
						<Text style={styles.menuItemText}>Logout</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView >
	);
};

const menuItems = [
	{ label: 'Profile', icon: require('/Users/adamhocini/Documents/Isitech/B3/Gym/assets/icon/decision-making_16330913.png') },
	{ label: 'Favorite', icon: require('/Users/adamhocini/Documents/Isitech/B3/Gym/assets/icon/favorite_222298.png') },
	{ label: 'Privacy Policy', icon: require('/Users/adamhocini/Documents/Isitech/B3/Gym/assets/icon/shield_109123.png') },
	{ label: 'Settings', icon: require('/Users/adamhocini/Documents/Isitech/B3/Gym/assets/icon/setting_4255672.png') },
	{ label: 'Help', icon: require('/Users/adamhocini/Documents/Isitech/B3/Gym/assets/icon/help_2081580.png') },
];

const styles = StyleSheet.create({
	safeArea: {
        flex: 1,
        backgroundColor: '#004080',
		paddingVertical: -40,
    },
	container: {
		flexGrow: 1,
		backgroundColor: '#FFF9F2',
	},
	header: {
		backgroundColor: '#004080',
		paddingVertical: 30,
		alignItems: 'flex-start',
		paddingHorizontal: 30,

	},
	headerText: {
		color: '#FFF9F2',
		fontSize: 20,
	},
	profileContainer: {
		backgroundColor: '#FFF9F2',
		alignItems: 'center',
		marginVertical: 20,
	},
	profileImage: {
		width: 200,
		height: 200,
		borderRadius: 100,
	},
	profileName: {
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 5,
	},
	profileEmail: {
		color: 'gray',
	},
	profileBirthday: {
		color: 'gray',
	},
	statsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#0a539d',
		paddingVertical: 10,
		borderRadius: 20,
		marginVertical: 15,
		marginHorizontal: 15,
	},
	statBox: {
		alignItems: 'center',
	},
	statValue: {
		color: '#FFF9F2',
		fontWeight: 'bold',
	},
	statLabel: {
		color: '#FFF9F2',
	},
	menuContainer: {
		backgroundColor: '#FFF9F2',
		paddingHorizontal: 20,
	},
	menuItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#f0f0f0',
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
