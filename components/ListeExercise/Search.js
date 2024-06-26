import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Search({ search, setSearch }) {
    return (
        <View style={styles.container}>
            <FontAwesome name="search" size={30} color="#FFA500" />
            <TextInput
                style={styles.text}
                placeholder="Rechercher un exercice"
                onChangeText={setSearch}
                value={search}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        fontSize: 20,
        color: '#FFA500',
        marginLeft: 5,
    },
});
