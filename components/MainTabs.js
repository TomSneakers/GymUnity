// MainTabs.js
import React from "react";
import { Ionicons, FontAwesome6, Entypo, FontAwesomeIcon } from "@expo/vector-icons";

import ProfilePage from "../screens/ProfilePage";
import Communication from "../screens/Communication";
import ListeEntrainement from "../screens/ListeEntrainement";
import HomePage from "../screens/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateTraining from "./createTraining";
import { useMe } from "./UseMe";
import { SafeAreaView, Text, Image, View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
	const { loading } = useMe();

	if (loading)
		return <SafeAreaView><Text>Loading ...</Text></SafeAreaView>;

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					flex: 1,
					position: "absolute",
					bottom: 20,
					left: 20,
					right: 20,
					backgroundColor: "#E0E1EF",
					borderRadius: 55,
					height: 80,
					color: "white",
					paddingTop: 10,
					paddingBottom: 0,
					alignContent: "flex-end"
				}, tabBarActiveTintColor: "orange",
				tabBarInactiveTintColor: "#004080",

			}}
		>
			<Tab.Screen name="Profile" component={HomePage} options={{
				tabBarLabel: "",
				tabBarIcon: ({ color }) => (
					<Entypo name="home" color={color} size={35} />
				),
			}} />

			<Tab.Screen name="ListeEntrainement" component={ListeEntrainement} options={{
				tabBarLabel: "",
				tabBarIcon: ({ color }) => (
					<FontAwesome6 name="dumbbell" color={color} size={35} />
				),
			}} />
			<Tab.Screen
				name="CreateTraining"
				component={CreateTraining}
				options={{
					tabBarLabel: "",
					tabBarIcon: ({ color }) => (
						<Ionicons name="add-circle" color={color} size={50} />
					),
				}}
			/>
			<Tab.Screen name="Groupe" component={Communication} options={{
				tabBarLabel: "",
				tabBarIcon: ({ color }) => (
					<Entypo name="chat" color={color} size={35} />
				),
			}} />
			<Tab.Screen name="user" component={ProfilePage} options={{
				tabBarLabel: "",
				tabBarIcon: ({ color, focused }) => (
					<View style={styles.container}>
						<Image
							source={require('../assets/photodeprofil/photodeprofil1.png')}
							style={focused ? styles.profileImageActive : styles.profileImage}
						/>
					</View>
				),
			}} />


		</Tab.Navigator >
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

	},
	profileImage: {
		width: 40,
		height: 40,
		borderRadius: 25,
		borderColor: "#004080",
		borderWidth: 3,
	},
	profileImageActive: {
		width: 40,
		height: 40,
		borderRadius: 25,
		borderColor: "#FFA500",
		borderWidth: 3,
	},
});

export default MainTabs;