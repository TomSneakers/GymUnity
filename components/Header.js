import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ color, title }) {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.retour} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color={color} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    retour: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#004080"
    },
    placeholder: {
        width: 24,
    },
});