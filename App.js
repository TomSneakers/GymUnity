// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./components/AuthStack";
import MainTabs from "./components/MainTabs";
import Entrainement from "./screens/Entrainement";
import WelcomePage from "./screens/WelcomePage";

const Stack = createStackNavigator();


const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="AuthStack" component={AuthStack} />
				<Stack.Screen name="MainTabs" component={MainTabs} />
				<Stack.Screen name="Entrainement" component={Entrainement} />
				<Stack.Screen name="WelcomePage" component={WelcomePage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;


