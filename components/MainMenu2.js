import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainMenu2 = () => {
    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('HomePage');
    };

    const handleMessagesPress = () => {
        navigation.navigate('MessagesPage'); // Assurez-vous que le nom de l'écran de messages est correct
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogoPress} style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.logoText}>GymUnity</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMessagesPress} style={styles.messagesContainer}>
                <Image source={require('../assets/icon/decision-making_16330913.png')} style={styles.icon} />
            </TouchableOpacity> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#004080',
        padding: 15,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    logoText: {
        color: '#FFF9F2',
        fontSize: 20,
        fontWeight: 'bold',
    },
    messagesContainer: {
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#FFF9F2',
    },
});

export default MainMenu2;
