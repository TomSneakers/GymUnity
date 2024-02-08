import {FetchRequest} from "./fetchRequest";
import * as SecureStore from 'expo-secure-store';

function signUp(email, username, password) {
    return FetchRequest.post('register')
                       .withBody({email, username, password})
                       .send();
}

function signIn(email, password) {
    return FetchRequest.post('login')
                       .withBody({email, password})
                       .send()
                       .then(response => response.json())
                       .then(({accessToken}) => SecureStore.setItem('accessToken', accessToken));

}

export const authService = {signUp, signIn};