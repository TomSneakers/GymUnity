import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Minuteur from "../components/Exercise/Minuteur";
import StrenghtExercice from "../components/Exercise/StrenghtExercice";
import CardioExercice from "../components/Exercise/CardioExercice";




export default function Entrainement({ navigation }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.retour} onPress={() =>
                            //Back to the previous page
                            navigation.goBack("ListeEntrainement")}>
                            <Icon name="arrow-back" size={30} color="orange" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={isActive ? styles.activeEdit : styles.edit}
                            onPress={() => setIsActive(!isActive)}
                        >
                            <Text style={isActive ? styles.activeTitleEdit : styles.editTitle}>Modifier</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>Entrainement</Text>
                    <View style={styles.underline} />
                    <View style={styles.itemContainer}>
                        <View style={styles.exercice}>
                            {/* Exercice Strength */}
                            <View style={styles.textuel}>
                                <Text style={styles.itemTitle}>Exercice 1</Text>
                                <StrenghtExercice name="Développé couché" series={4} repetitions={10} weight={50} />
                                <View style={styles.minuteur}>
                                    <CardioExercice name="Course" duration={30} />
                                </View>
                                <View style={styles.repos}>
                                    <Minuteur initialTime={30} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#FFF9F2',
        height: '100%',
    },
    ScrollView: {
        flex: 1,
    },
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
    },
    underline: {
        borderBottomColor: '#022150',
        borderBottomWidth: 2,
        width: 50,
        marginBottom: 20,
    },

    itemTitle: {
        fontSize: 20,
        color: '#022150',
        marginBottom: 10,
        fontFamily: 'Inter-Black',
    },

    minuteur: {
        marginTop: 20,
    },
    repos: {
        marginTop: 20,
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '150%',
        alignSelf: 'center',
    },
});