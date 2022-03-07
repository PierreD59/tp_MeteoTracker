export class WeatherService {
    constructor() {
        this.options = {
            apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
            apiKey: '&appid=447919b58ecccaf56b0d58e5b745e2b3',

        }
    }

    search(city) {
        return fetch(this.options.apiUrl + "?q=" + city + this.options.apiKey)
        .then(response => response.json())
        ;
    }
}