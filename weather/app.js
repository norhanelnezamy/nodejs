const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=almansoura%20egypt',
    json: true
  }, (error, response, body) => {
    console.log(body);
});
