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

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value
    weather.changeLocation(city, countryCode);
    fetchWeather();
    e.preventDefault();
  
  });

document.addEventListener('DOMContentLoaded', fetchWeather);