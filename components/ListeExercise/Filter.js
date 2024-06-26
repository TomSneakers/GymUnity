import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Filter({ isStarred, setIsStarred }) {
    const toggleStar = () => {
        setIsStarred(!isStarred);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleStar} style={styles.star}>
                <FontAwesome name={isStarred ? "star" : "star-o"} size={30} color="#FFA500" />
            </TouchableOpacity>
            <Text style={styles.text}>Favoris</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    star: {
        marginRight: 5,
    },
    text: {
        fontSize: 20,
        color: '#FFA500',
    },
});
