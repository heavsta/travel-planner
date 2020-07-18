const weatherbitUrl = 'http://api.weatherbit.io/v2.0/forecast/daily';
const weatherbitApiKey = '4dde57a9c99244e19d8a799f1aa754d2';

const getWeather = async (latitude, longitude, dateInput) => {
    const req = await fetch(weatherbitUrl + "?" + "&lat=" + latitude + "&lon=" + longitude + "&start_date=" + dateInput + "&end_date="+ dateInput +"&units=I"+"&key=" + weatherbitApiKey);
    try {
      const weatherData = await req.json();
      return weatherData;
    } catch(error) {
      console.log("getWeather error!", error);
    }
};

export { getWeather }