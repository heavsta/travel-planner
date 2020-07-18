const pixabayUrl = 'https://pixabay.com/api/?key=';
const pixabayApiKey = '17515991-320a62210cdeb6ba505cb8a30';

const updateUI = async(allData) => {
    const request = await fetch(pixabayUrl + pixabayApiKey + "&q=" + allData.cityInput + "+&image_type=illustration");
    try {
        const pixabayImg = await request.json();
        //delay before departure
        const currentTime = new Date();
        const newDateInput = new Date (document.getElementById('date').value);
        const daysCalc = Math.ceil(newDateInput - currentTime);
        const countdown = Math.ceil(daysCalc / 8.64e7);
        const dateFormat = allData.dateInput.split("-").reverse().join("/");
        //update UI
        document.getElementById('city').innerHTML = allData.cityInput;
        document.getElementById('temp').innerHTML = allData.weather;
        document.getElementById('days').textContent = countdown;
        document.getElementById('dateEntered').innerHTML = dateFormat;
        document.getElementById('cityImage').setAttribute('src', pixabayImg.hits[0].webformatURL);
    } catch(error) {
        console.log("updateUI error!", error);
    }
};

export { updateUI }