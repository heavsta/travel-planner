const postData = async(url ='', data = {}) => {
    const request = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },

      body: JSON.stringify({
        date: data.dateInput,
        city: data.cityInput,
        weather: data.weather
    })
  });
    try {
        const allData = await request.json();
        return allData;
    } catch(error) {
        console.log('postData error!',error);
    }
};

export { postData }