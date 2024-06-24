// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./components/AuthStack";
import MainTabs from "./components/MainTabs";
import Entrainement from "./screens/Entrainement";
import WelcomePage from "./screens/WelcomePage";
import AfterSignup from "./screens/AfterSignup";
import { UserProvider } from "./context/Context";

const Stack = createStackNavigator();

const App = () => {
	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="AuthStack" component={AuthStack} />
					<Stack.Screen name="MainTabs" component={MainTabs} />
					<Stack.Screen name="Entrainement" component={Entrainement} />
					<Stack.Screen name="WelcomePage" component={WelcomePage} />
					<Stack.Screen name="AfterSignup" component={AfterSignup} />
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	);
};

export default App;
