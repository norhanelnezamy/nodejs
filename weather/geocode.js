const request = require('request');

var address = (address, callback) => {
  return new Promise( (resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
      json: true
    }, (error, response, body) => {
      if (!error && body.status != "ZERO_RESULTS") {
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      } else{
        reject("Unable to fetch Google API .");
      }
    });

  });
};

module.exports = {
  address,
};
