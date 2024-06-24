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

async function signIn(email, password) {
	let response;
	try {
		response = await FetchRequest.post("/login")
			.withBody({ email, password })
			.send();

		if (!response.ok) {
			// verifier le code d'erreur
			throw new alert('Mail ou mot de passe incorrecte');
			//Affiche moi un message d'erreur en Alert


		}
		console.log('response:', response);
		const { accessToken, refreshToken } = await response.json();
		SecureStore.setItem("accessToken", String(accessToken));
		SecureStore.setItem("refreshToken", String(refreshToken));
	} catch (e) {
		console.error(JSON.stringify(e));
		throw e;
	}

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
		.then(
			response => response.json());

}

export const authService = { signUp, signIn, findMe, refreshToken };