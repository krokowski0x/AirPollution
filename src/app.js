const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const APIkey =  '5c1cab6751071efd72d4c9f8830c8649';
const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

const toCelsius = tempF => Math.round(5/9*(tempF-32));

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    }

    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.forecast.io/forecast/${APIkey}/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);

}).then((response) => {

    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It's currently ${toCelsius(temperature)}\u00B0C. It feels like ${toCelsius(apparentTemperature)}\u00B0C.`);

}).catch((err) => {
    if (err.code === 'ENOTFOUND') {
      console.error('Unable to connet to API servers.');
    } else {
      console.error(err.message);
    }
});
