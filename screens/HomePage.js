import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const posts = [
    {
        id: '1',
        user: 'John Doe',
        type: 'Cardio',
        result: '5 km in 30 minutes',
        image: require('../assets/Login/coche.png'),
    },
    {
        id: '2',
        user: 'Jane Smith',
        type: 'Muscle',
        result: '50 push-ups',
        image: require('../assets/Login/coche.png'),
    },
    // Ajoutez plus de posts ici
];

const PostItem = ({ post }) => (
    <View style={styles.postContainer}>
        <View style={styles.postHeader}>
            <Text style={styles.postUser}>{post.user}</Text>
        </View>
        <Image source={post.image} style={styles.postImage} />
        <View style={styles.postContent}>
            <Text style={styles.postType}>{post.type}</Text>
            <Text style={styles.postResult}>{post.result}</Text>
        </View>
    </View>
);

const HomePage = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostItem post={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.feedContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    feedContainer: {
        padding: 20,
    },
    postContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    postUser: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    postContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    postType: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    postResult: {
        fontSize: 14,
        color: '#333',
    },
});

export default HomePage;
