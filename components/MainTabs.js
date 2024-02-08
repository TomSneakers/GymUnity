// MainTabs.js
import React from 'react';

import ProfilePage from '../screens/ProfilePage';
import Communication from '../screens/Communication';
import Entrainement from '../screens/Entrainement';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfilePage} />
            <Tab.Screen name="Groupe" component={Communication} />
            <Tab.Screen name="Entrainement" component={Entrainement} />
        </Tab.Navigator>
    );
};

export default MainTabs;
