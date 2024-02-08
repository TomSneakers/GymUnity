import {FetchRequest} from "./fetchRequest";

function getTrainings() {
    return FetchRequest.get('/training')
                       .withAuthorization()
                       .send()
                       .then(response => response.json());
}

export const trainingService = {
    getTrainings
};