import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function HeaderExercise({ title, description, isActive, setIsActive, training, route, navigation }) {





    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.retour} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={isActive ? styles.activeEdit : styles.edit}
                    onPress={() => setIsActive(!isActive)}
                >
                    <Text style={isActive ? styles.activeTitleEdit : styles.editTitle}>Modifier</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{training.title}</Text>
            <View style={styles.underline} />
            <Text style={styles.description}>{training.description}</Text>
            <Text style={styles.itemCount}>Nombre d'exercices:
                {training.exercises.length}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: -10,
        marginBottom: 50,
        justifyContent: 'space-between',
    },
    edit: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginRight: -20,
    },
    activeEdit: {
        color: "#004080",
        borderColor: "#004080",
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        marginRight: -20,
    },
    editTitle: {
        fontSize: 20,
        color: 'orange',
        fontFamily: 'Inter-Black',
    },
    activeTitleEdit: {
        fontSize: 20,
        color: '#004080',
        fontFamily: 'Inter-Black',
    },
    retour: {
        marginLeft: -30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 50,
        paddingHorizontal: 50,
    },
    title: {
        fontSize: 24,
        color: '#022150',
        marginBottom: 20,
        fontFamily: 'Inter-Black',
        textTransform: 'uppercase',
    },
    underline: {
        borderBottomColor: '#022150',
        borderBottomWidth: 2,
        width: 50,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    itemCount: {
        fontSize: 14,
        color: '#999',
        marginBottom: 20,
    },
});