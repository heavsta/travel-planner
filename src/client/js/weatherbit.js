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