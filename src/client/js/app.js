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
const geonamesApiKey = 'heavsta'

const weatherbitUrl = 'http://api.weatherbit.io/v2.0/forecast/daily';
const weatherbitApiKey = '4dde57a9c99244e19d8a799f1aa754d2';

const pixabayUrl = 'https://pixabay.com/api/?key=';
const pixabayApiKey = '17515991-320a62210cdeb6ba505cb8a30';

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
        .then((weatherData) => {
            const allData = postData('http://localhost:8080/add', {cityInput, dateInput, weather: weatherData.data[0].temp});
            return allData;
        })
        //update UI
        .then(function(allData) {
            updateUI(allData);
        });
}

export { saveTrip }