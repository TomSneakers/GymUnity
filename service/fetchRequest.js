import {getItem} from "expo-secure-store";
import {authService} from "./authService";

export class FetchRequest {
	constructor(method, ressource) {
		this.method = method;
		this.url = `http://localhost:5149${ressource}`;
		this.headers = {};
		this.isUsingAuthorization = false;
	}

	withBody(body) {
		this.body = JSON.stringify(body);
		this.headers = {
			"Content-Type": "application/json",
		};
		return this;
	}

	addHeader(key, value) {
		this.headers[key] = value;
		return this;
	}

	withAuthorization() {
		this.isUsingAuthorization = true;
		return this;
	}

	async send() {
		if (this.isUsingAuthorization) {
			let token = JSON.parse(getItem("accessToken"));
			if (new Date().getTime() - token.fetchDate < 3600) {
				token = (await authService.refreshToken()).accessToken;
			}
			this.addHeader("Authorization", `Bearer ${token.accessToken}`);
		}
		return fetch(this.url, {
			method: this.method,
			headers: this.headers,
			body: this.body,
		});
	}

	static post(ressource) {
		return new FetchRequest("POST", ressource);
	}

	static get(ressource) {
		return new FetchRequest("GET", ressource);
	}
}