const { Weather } = require('./Weather.js');
const { UI } = require('./UI');
const { Store } = require('./Store');
require('./index.css');


const storage = new Store();
const {city, countryCode}= storage.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);


async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value
    weather.changeLocation(city, countryCode);
    storage.setLocationData(city, countryCode);
    fetchWeather();
    
  
  });

document.addEventListener('DOMContentLoaded', fetchWeather);