<<<<<<< HEAD
import {FetchRequest} from "./fetchRequest";

function getTrainings() {
    return FetchRequest.get('/workout')
                       .withAuthorization()
                       .send()
                       .then(response => response.json());
}

function createTraining(training) {
    return FetchRequest.post('/workout')
                       .withAuthorization()
                       .withBody(training)
                       .send();
=======
import { FetchRequest } from "./fetchRequest";

function getTrainings() {
    return FetchRequest.get('/training')
        .withAuthorization()
        .send()
        .then(response => console.log(response.body))
}

function createTraining(training) {
    return FetchRequest.post('/training')
        .withAuthorization()
        .withBody(training)
        .send()
>>>>>>> tom
}

export const trainingService = {
    getTrainings,
    createTraining
};