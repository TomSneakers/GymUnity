// Boutton component avec style et fonctionnalité

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';



const Bouton = ({ title, onPress, style }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
//style 
const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 50,
        width: '100%',
        alignItems: 'center',


    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',


    },
});

export default Bouton;