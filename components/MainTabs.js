// MainTabs.js
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import ProfilePage from '../screens/ProfilePage';
import Communication from '../screens/Communication';
import Entrainement from '../screens/Entrainement';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateTraining from './createTraining';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    flex: 1,
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: '#E0E1EF',
                    borderRadius: 55,
                    height: 80,
                    color: 'white',
                    paddingTop: 10,
                    paddingBottom: 0,
                    alignContent: 'flex-end'
                }, tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: '#004080',

            }}
        >
            <Tab.Screen name="Profile" component={ProfilePage} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="add-circle" color={color} size={40} />
                ),
            }} />
            <Tab.Screen name="Groupe" component={Communication} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="add-circle" color={color} size={40} />
                ),
            }} />
            <Tab.Screen name="Entrainement" component={Entrainement} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="add-circle" color={color} size={40} />
                ),
            }} />
            <Tab.Screen
                name="CreateTraining"
                component={CreateTraining}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="add-circle" color={color} size={40} />
                    ),
                }}

            />
        </Tab.Navigator>
    );
};

export default MainTabs;