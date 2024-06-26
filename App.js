// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./components/AuthStack";
import MainTabs from "./components/MainTabs";
import ListeEntrainement from "./screens/ListeEntrainement";
import WelcomePage from "./screens/WelcomePage";
import Landing from "./screens/Landing";
import { UserProvider } from "./context/Context";
import Entrainement from "./screens/Entrainement";


const Stack = createStackNavigator();

const App = () => {
	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="AuthStack" component={AuthStack} />
					<Stack.Screen name="MainTabs" component={MainTabs} />
					<Stack.Screen name="ListeEntrainement" component={ListeEntrainement} />
					<Stack.Screen name="WelcomePage" component={WelcomePage} />
					<Stack.Screen name="Landing" component={Landing} />
					<Stack.Screen name="Entrainement" component={Entrainement} />


				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	);
};

export default App;
