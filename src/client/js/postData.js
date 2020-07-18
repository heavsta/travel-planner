const postData = async(url ='', data = {}) => {
    const request = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', // body data type must match "Content-Type" header
        },
        body: JSON.stringify({
            city: data.cityInput,
            date: data.dateInput,
            weather: data.weather,
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