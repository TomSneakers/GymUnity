import { FetchRequest } from "./fetchRequest";
import * as SecureStore from "expo-secure-store";

// function signUp(email, username, password) {
// 	return FetchRequest.post("/register")
// 		.withBody({ email, username, password })
// 		.send()
// 		.then(response => response.json())
// 		.then((response) => {
// 			console.log("resp", response);
// 			if (response.status && response.status != 200) {
// 				if (response.errors) {
// 					throw response.errors;
// 				} else {
// 					throw new Error('Une erreur inconnue est survenue lors de l\'inscription');
// 				}
// 			}
// 		});
// 	//.then(({ accessToken, refreshToken }) => {
// 	// 	//const _accessToken = { accessToken, fetchDate: new Date().getTime() };
// 	// 	SecureStore.setItem("accessToken", accessToken);
// 	// 	SecureStore.setItem("refreshToken", refreshToken);
// 	//});
// }
function signUp(email, username, password) {
	return FetchRequest.post("/register")
		.withBody({ email, username, password })
		.send()
		.then(response => {
			console.log('Status de la réponse:', response.status);
			if (!response.ok) {
				return response.text().then(text => {
					try {
						return { status: response.status, body: JSON.parse(text) };
					} catch {
						throw new Error('Erreur du serveur: ' + text);
					}
				});
			}
			return { status: response.status, body: {} };
		});
}

function signIn(email, password) {
	return FetchRequest.post("/login")
		.withBody({ email, password })
		.send()
		.catch(e => {
			console.error(JSON.stringify(e));
			throw e;
		})
		.then(response => response.json())
		.then(({ accessToken, refreshToken }) => {
			//const _accessToken = { accessToken, fetchDate: new Date().getTime() };
			SecureStore.setItem("accessToken", accessToken);
			SecureStore.setItem("refreshToken", refreshToken);
		});
}

function refreshToken() {
	const _refreshToken = SecureStore.getItem("refreshToken");
	return FetchRequest.post("/refresh")
		.withBody({ refreshToken: _refreshToken })
		.send()
		.then(response => response.json())
		.then(({ accessToken, refreshToken }) => {
			//const _accessToken = { accessToken, fetchDate: new Date().getTime() };
			SecureStore.setItem("accessToken", accessToken);
			SecureStore.setItem("refreshToken", refreshToken);

			return { accessToken, refreshToken };
		});
}

function findMe() {
	return FetchRequest.get("/auth/me")
		.withAuthorization()
		.send()
		.catch(e => {
			console.log(e);
			throw e;
		})
		.then(response => response.json());
}

export const authService = { signUp, signIn, findMe, refreshToken };