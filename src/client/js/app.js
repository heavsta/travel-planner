/**
 * Imports
 */

import { getCoordinates } from './geonames'
import { getWeather } from './weatherbit'
import { postData } from './postData'
import { updateUI } from './updateUI'


/**
 * Global Variables
 */

const geonamesUrl = 'http://api.geonames.org/searchJSON?q=';
const geonamesApiKey = process.env.GEONAMES_API_ID;

const weatherbitUrl = 'https://cors-anywhere.herokuapp.com/http://api.weatherbit.io/v2.0/forecast/daily';
const weatherbitApiKey = process.env.WEAHTERBIT_API_ID;

const pixabayURl = 'https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=';
const pixabayApikey = process.env.PIXABAY_API_ID;

const submit = document.getElementById('generate');


/**
 * Main function
 */

// Event listener
submit.addEventListener('click', saveTrip);

function saveTrip(event) {
    //preventing default action
    event.preventDefault();

    //getting user input into variables
    const cityInput = document.getElementById('city').value;
    const dateInput = document.getElementById('date').value;

    getCoordinates(geonamesUrl, cityInput, geonamesApiKey)
        //using coordinates to create weather variable
        .then((coordinates) => {
            const latitude = coordinates.geonames[0].lat;
            const longitude = coordinates.geonames[0].lng;
            const weatherData = getWeather(latitude, longitude, dateInput);
            return weatherData;
        })
        //add all the data to the POST request
        .then((weather) => {
            const allData = postData('http://localhost:8080/add', {cityInput, dateInput, weather: weatherData.data[0].temp});
            return allData;
        })
        //update UI
        .then(function(allData) {
            updateUI(allData);
        });
}

export { saveTrip }