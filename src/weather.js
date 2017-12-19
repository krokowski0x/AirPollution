const request = require('request');
const APIkey =  '5c1cab6751071efd72d4c9f8830c8649';

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/${APIkey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
}

module.exports = {
  getWeather
};
