// Communication.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Search from '../components/ListeExercise/Search';
import { useNavigation } from '@react-navigation/native';

const Communication = () => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }
    const navigation = useNavigation();
    const navigateToChat = () => {
        navigation.navigate('Chat');
    }
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Search />

                <View style={styles.container}>

                    <Text style={styles.heading}>Conversations</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat', { name: 'Jane' })}>
                        <Text>Jane</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

});
export default Communication;