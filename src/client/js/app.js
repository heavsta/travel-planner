import { getGeonamesApiData } from './GeonamesApi';


// Event listener
document.getElementById('generate').addEventListener('click', saveTrip);


function saveTrip() {

    // First get user input, aka CITY + DEPARTURE DATE
    let cityInput = document.getElementById('city').value;
    let dateInput = document.getElementById('date').value;

    // Geonames API credentials
    let geonamesApiKey = process.env.GEONAMES_API_ID;
    let geonamesUrl = `http://api.geonames.org/searchJSON?q=${cityInput}&username=${geonamesApiKey}`;

    // Call Geonames API
    getGeonamesApiData(geonamesUrl)

        // Post geographical details to the server
        .then(async function(geonamesApiData) {
            await postData('/add', {
                departureDate: dateInput,
                city: geonamesApiData.geonames[0].name,
                country: geonamesApiData.geonames[0].countryName,
                latitude: geonamesApiData.geonames[0].lat,
                longitude: geonamesApiData.geonames[0].lng
            });

            //Update UI
            await updateUI();
        });
}


export { saveTrip }