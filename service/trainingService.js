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
}

export const trainingService = {
    getTrainings,
    createTraining
};