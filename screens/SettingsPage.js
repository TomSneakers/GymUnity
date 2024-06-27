// SettingsPage.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsPage = () => {
    const [isProfilePublic, setIsProfilePublic] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const handleSaveChanges = () => {
        // Logic to save changes
        console.log("Changes saved");
    };

    const handleLogout = () => {
        // Logic to log out
        navigation.navigate("WelcomePage");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.headerText}>Settings</Text>

                <View style={styles.settingContainer}>
                    <Text style={styles.settingLabel}>Public Profile</Text>
                    <Switch
                        value={isProfilePublic}
                        onValueChange={(value) => setIsProfilePublic(value)}
                    />
                </View>

                <View style={styles.settingContainer}>
                    <Text style={styles.settingLabel}>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter your username"
                    />
                </View>

                <View style={styles.settingContainer}>
                    <Text style={styles.settingLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
                    <Text style={styles.buttonText}>Save Changes</Text>
                </TouchableOpacity>

                <Text style={styles.subHeaderText}>Filter & Sort</Text>

                {/* Additional settings for filter and sort */}
                {/* Example for filter */}
                <View style={styles.settingContainer}>
                    <Text style={styles.settingLabel}>Filter by Type</Text>
                    {/* Replace with your filter UI */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter filter type"
                    />
                </View>

                {/* Example for sort */}
                <View style={styles.settingContainer}>
                    <Text style={styles.settingLabel}>Sort by</Text>
                    {/* Replace with your sort UI */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter sort criteria"
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF9F2',
    },
    container: {
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    settingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    settingLabel: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        width: '60%',
    },
    button: {
        backgroundColor: '#004080',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default SettingsPage;
