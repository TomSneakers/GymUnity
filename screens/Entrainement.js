// Entrainement.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Entrainement = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Entrainement</Text>
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
export default Entrainement;
