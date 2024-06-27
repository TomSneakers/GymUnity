import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, SafeAreaView, ScrollView, RefreshControl, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { trainingService } from "../service/trainingService";
import Filter from "../components/ListeExercise/Filter";
import Search from "../components/ListeExercise/Search";


export default function ListeEntrainement() {
	const navigation = useNavigation();
	const [trainings, setTrainings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [starredItems, setStarredItems] = useState([false, false, false]);
	const [isStarred, setIsStarred] = useState(false); // État pour le filtre
	const [search, setSearch] = useState(''); // État pour la recherche
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		getTrainings();
	}, []);

	const getTrainings = () => {
		trainingService.getTrainings()
			.then((data) => {
				setTrainings(data);
				setIsLoading(false);
			})
			.catch((error) => {
				Alert.alert("Erreur", error);
				setIsLoading(false);
			});
	};

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			getTrainings();
			setRefreshing(false);
		}, 2000);
	};

	const filteredTrainings = useMemo(() => {
		if (!isStarred && !search) return trainings;

		return trainings.filter(item => {
			const matchesSearch = search === '' || item.title.toLowerCase().includes(search.toLowerCase());
			const isStarredItem = isStarred ? starredItems[item.id - 1] : true; // Assuming item.id is unique and starts from 1
			return matchesSearch && isStarredItem;
		});
	}, [trainings, starredItems, isStarred, search]);

	const navigateToTraining = (training, getTrainings) => {
		navigation.navigate('EntrainementDetails', { training, getTrainings });
	};

	if (isLoading) {
		return (
			<View style={styles.container}>
				<Text>Chargement...</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView
				contentContainerStyle={styles.scrollViewContent}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
			>
				<View style={styles.container}>
					<Text style={styles.title}>Entrainements</Text>
					<View style={styles.underline} />
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
						<Filter isStarred={isStarred} setIsStarred={setIsStarred} />
						<Search search={search} setSearch={setSearch} />
					</View>

					{filteredTrainings.map((item) => (
						<TouchableOpacity
							key={item.id}
							style={styles.itemContainer}
							onPress={() => navigateToTraining(item)}
						>

							<View style={styles.textuel}>
								<Text style={styles.itemTitle}>{item.title}</Text>
								<Text style={styles.itemDescription}>{item.description}</Text>
								<View style={{ flexDirection: 'row', justifyContent: 'start', marginLeft: 15, marginTop: 20 }}>
									<Image source={require('../assets/Training/exerciseImage.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
									<Text style={styles.itemCount}>
										{item.exercises.length} {item.exercises.length > 1 ? 'Exercices' : 'Exercice'}
									</Text>
								</View>
							</View>
							<View style={styles.visuel}>
								<Image style={styles.image} source={item.exercises.filter(exercise => exercise.type === 'Cardio').length > item.exercises.filter(exercise => exercise.type === 'Strength').length ? require('../assets/Training/cardioRed.jpeg') : require('../assets/Training/muscu.jpeg')} />
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#F0F0F0",
	},
	scrollViewContent: {
		flexGrow: 1,
		paddingBottom: 20,
	},
	container: {
		paddingHorizontal: 20,
		paddingTop: 20,
		marginBottom: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#004080',
	},
	underline: {
		height: 2,
		backgroundColor: '#FFA500',
		width: 90,
		alignSelf: 'center',
		marginBottom: 10,
	},
	itemContainer: {
		flexDirection: 'row',
		backgroundColor: "white",
		marginTop: 30,
		height: 150,
		borderRadius: 20,
		//box shadow
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	textuel: {
		flex: 1,
		width: "50%",
	},
	visuel: {
		flex: 1,
		width: "50%",
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		alignContent: 'flex-end',
		alignSelf: 'flex-end',
	},

	itemTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "004080",
		marginHorizontal: 15,
		marginTop: 30,
		fontFamily: 'Poppins_600SemiBold',
		textTransform: 'uppercase',

	},
	itemDescription: {
		fontSize: 14,
		color: "#666",
		marginHorizontal: 15,
	},
	itemCount: {
		fontSize: 12,
		color: "#999",
	},
	image: {
		width: "100%",
		height: 150,
		alignSelf: 'flex-end',
		marginTop: 10,
		borderRadius: 20,
	},
});
