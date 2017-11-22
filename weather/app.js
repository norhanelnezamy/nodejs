const geocode = require('./geocode.js');
const weather = require('./weather.js');
const yargs = require('yargs');
// set address attribute optional in command
var argv = yargs.options({a:{demand: true,alias: 'address',string: true}})
                .help()
                .alias('help', 'h')
                .argv;


geocode.address(encodeURIComponent(argv.a)).then((geo) => {
  console.log(geo.address);
  weather.getWeather({lat: geo.lat,lng: geo.lng}).then((weather) => {
    console.log(weather);
  });
}).catch((errorMsg) => {
  console.log(errorMsg);
});
