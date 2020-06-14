const { Weather } = require('./Weather.js');
const { UI } = require('./UI');
require('./index.css');


const ui = new UI();
const weather = new Weather('Santiago', 'cl');


async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

document.addEventListener('DOMContentLoaded', fetchWeather);