import {FetchRequest} from "./fetchRequest";
import * as SecureStore from "expo-secure-store";

function signUp(email, username, password) {
	return FetchRequest.post("/register")
					   .withBody({email, username, password})
					   .send();
}

function signIn(email, password) {
	return FetchRequest.post("/login")
					   .withBody({email, password})
					   .send()
					   .catch(e => {
						   console.error(JSON.stringify(e));
						   throw e;
					   })
					   .then(response => response.json())
					   .then(({accessToken, refreshToken}) => {
						   const _accessToken = {accessToken, fetchDate: new Date().getTime()};
						   SecureStore.setItem("accessToken", JSON.stringify(_accessToken));
						   SecureStore.setItem("refreshToken", refreshToken);
					   });
}

function refreshToken() {
	const _refreshToken = SecureStore.getItem("refreshToken");
	return FetchRequest.post("/refresh")
					   .withBody({refreshToken: _refreshToken})
					   .send()
					   .then(response => response.json())
					   .then(({accessToken, refreshToken}) => {
						   const _accessToken = {accessToken, fetchDate: new Date().getTime()};
						   SecureStore.setItem("accessToken", JSON.stringify(_accessToken));
						   SecureStore.setItem("refreshToken", JSON.stringify(refreshToken));

						   return {accessToken, refreshToken};
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

export const authService = {signUp, signIn, findMe, refreshToken};