const request = require('request');

var getWeather = (location, callback) => {
  return new Promise((resolve, reject) => {

    request({
      url: `https://api.darksky.net/forecast/94ccd0d91f72fc9629fc497a5c8ba7be/${location.lat},${location.lng}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve({
          lat: body.latitude,
          lng: body.longitude,
          timezone: body.timezone,
          currently: body.currently
        });
      } else{
        reject("Unable to fetch weather");
      }
    });
  });

};


module.exports = {
  getWeather,
};
