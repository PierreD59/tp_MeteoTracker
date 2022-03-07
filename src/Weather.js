import { WeatherService } from "./WeatherService.js";

export class Weather {
    constructor() {
        this.retrieveWidget();
        this.position();
        this.weatherService = new WeatherService;

    }

    retrieveWidget() {
        this.widget = {
            submit: document.getElementById('submit'),
            city: document.getElementById('city'),
            weatherList: document.querySelector('.weatherList'),
        }
    }

    position() {
        this.widget.submit.addEventListener('click', e => {
            e.preventDefault();
       
            this.weatherService.search(this.widget.city.value)
            .then(city => { 
                console.log(city);

                const cityName = document.createElement('h2');
                cityName.classList.add('col-10', 'm-auto', 'mt-3', 'text-center', 'fw-bold' );
                cityName.innerHTML = "Météo de " + city.name;
                this.widget.weatherList.appendChild(cityName);


                const weatherStatut = document.createElement('div');
                weatherStatut.classList.add('col-10', 'm-auto', 'mt-3', );
                weatherStatut.innerHTML = "temps : " + city.weather[0].main;
                this.widget.weatherList.appendChild(weatherStatut);
            });
        });
    }
}