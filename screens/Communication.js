// Communication.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Communication = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Communication</Text>
            {/* Ajoute d'autres éléments de la page de profil ici */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

});
export default Communication;