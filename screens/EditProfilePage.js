// EditProfilePage.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProfilePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Edit Profile</Text>
            {/* Ajoutez les champs de formulaire pour l'édition du profil */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
    },
});

export default EditProfilePage;
