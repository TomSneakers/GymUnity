// AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/LoginPage';
import SignupPage from '../screens/SignupPage';
import ForgotPasswordPage from '../screens/ForgotPasswordPage'; // Ajout de cette ligne

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignupPage" component={SignupPage} />
            <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
        </Stack.Navigator >
    );
};

export default AuthStack;
