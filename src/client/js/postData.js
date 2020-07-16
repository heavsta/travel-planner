const postData = async (url='', data={}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), // body data type must match "Content-Type header"
    });
    try {
        const newData = await res.json();
        return newData;
    } catch(error) {
        console.log('PostData error!', error);
    }
}