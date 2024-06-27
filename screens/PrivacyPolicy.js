// Page de politque de confidentialité

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import MainMenu2 from "../components/MainMenu2";
import { useUser } from "../context/Context";
import Header from "../components/Header";
import ButtonAccepte from "../components/Policy/ButtonAccepte";


const PrivacyPolicy = () => {



    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Header title="Privacy Policy" color="#004080" />
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Privacy Policy</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam
                        in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices. Nullam nec nisl sit amet metus tincidunt tincidunt. Nullam in nunc nec libero lacinia ultrices.</Text>
                    <ButtonAccepte />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 10,
        flexGrow: 1,
        backgroundColor: "#FFF9F2",
        padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "#EDEDED",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        padding: 20,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "#004080",
        padding: 10,
        borderRadius: 5,
        width: "48%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    profileContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default PrivacyPolicy;