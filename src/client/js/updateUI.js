import { request } from "express";

const updateUI = async() => {
    const req = await fetch('/all');
    try {
        const allData = await request.json();
        document.getElementById('city-name').innerHTML = allData.city;
        document.getElementById('country-name').innerHTML = allData.country;
        document.getElementById('departure-date').innerHTML = allData.departureDate;
    } catch(error) {
        console.log("UpdateUI error!", error);
    }
}

export { updateUI }