import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {authService} from "../service/authService";

export function useMe() {
	const navigation = useNavigation();
	const [me, setMe] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		authService.findMe()
				   .then(setMe)
				   .then(() => setLoading(false))
				   .catch(() => navigation.navigate("WelcomePage"));
	}, []);

	return {me, loading};
}