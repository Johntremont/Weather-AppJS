export class Weather {
  constructor(city, countryCode) {
      this.apikey = 'cb732c4b52bdc9bccfaa964e6c1c4947';
      this.city = city;
      this.countryCode = countryCode;        
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}`;
    const data = await fetch(URI);
    return data;
  }
}