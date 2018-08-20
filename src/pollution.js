const fs = require("fs");
const fetch = require("node-fetch");
const chalk = require("chalk");
const APItoken = require("./superSecretAPIKey");

const setupFile = fs.readFileSync("app-setup.json");
const displayResults = (results, location) => {
	let quality = "";
	let hex = "";
	switch (results.pollutionLevel) {
		case 1:
			quality = "Very low";
			hex = "#0f0";
			break;
		case 2:
			quality = "Low";
			hex = "#ff6";
			break;
		case 3:
			quality = "Medium";
			hex = "#fc6";
			break;
		case 4:
			quality = "High";
			hex = "#f90";
			break;
		case 5:
			quality = "Very high";
			hex = "#f00";
			break;
		case 6:
			quality = "Extreme";
			hex = "#900";
			break;
		default:
			quality = "Unknown. Something went wrong.";
			hex = "#fff";
	}
	console.log(
		`Air pollution in your current location is ${chalk
			.hex(hex)
			.bold(quality.toUpperCase())} with AQI: ${chalk
			.bgHex(hex)
			.bold(Math.round(results.airQualityIndex))}`
	);
};
const checkPollution = () => {
	const stationID = parseInt(
		JSON.parse(setupFile).location.match(/\d+$/g)[0],
		10
	);
	const location = JSON.parse(setupFile).location;
	const airPollutionUrl = `https://airapi.airly.eu/v1/sensor/measurements?sensorId=${stationID}`;
	return fetch(airPollutionUrl, {
		headers: {
			Accept: "application/json",
			apikey: APItoken
		}
	})
		.then(response => response.json())
		.then(results => displayResults(results.currentMeasurements, location))
		.catch(err => console.log(err));
};

module.exports = {
	checkPollution
};
