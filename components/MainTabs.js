// MainTabs.js
import React from 'react';

import ProfilePage from '../screens/ProfilePage';
import Communication from '../screens/Communication';
import Entrainement from '../screens/Entrainement';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateTraining from './createTraining';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} style={styles.nav}>
            <Tab.Screen name="Profile" component={ProfilePage} />
            <Tab.Screen name="Groupe" component={Communication} />
            <Tab.Screen name="Entrainement" component={Entrainement} />
            <Tab.Screen name="CreateTraining" component={CreateTraining} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'black',
    },
});


export default MainTabs;
