const { Weather } = require('./Weather.js');

const weather = new Weather('London', 'uk');

require('./index.css');

function fetchWeather() {
   weather.getWeather
}

document.addEventListener('DOMContentLoaded', fetchWeather);