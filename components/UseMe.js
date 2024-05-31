import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { authService } from "../service/authService";

export function useMe() {
	const navigation = useNavigation();
	const [me, setMe] = useState({});
	const [loading, setLoading] = useState(true);
	console.log("hello-----------------");
	useEffect(() => {
		authService.findMe()
			.then(setMe)
			.then(() => setLoading(false))
			.catch(() => navigation.navigate("WelcomePage"));
	}, []);
	console.log(me);
	console.log(loading);

	return { me, loading };
}