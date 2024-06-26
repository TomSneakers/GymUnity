import { FetchRequest } from "./fetchRequest";

function getTrainings() {
	return FetchRequest.get("/workout")
		.withAuthorization()
		.send()
		.then(response => response.json());

}

function createTraining(training) {
	return FetchRequest.post("/workout")
		.withAuthorization()
		.withBody(training)
		.send();
}

export const trainingService = {
	getTrainings,
	createTraining
};