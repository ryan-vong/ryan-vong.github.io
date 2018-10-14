let request = require('request');
let argv = require('yargs').argv;

let apiKey = '136daea385b9152c3d33891beede967c';
let city = argv.c || 'san francisco';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name} and the min temperature is ${weather.main.temp_min} degrees and the max temperature is ${weather.main.temp_max} degrees.`;
    console.log(message);
  }
});
