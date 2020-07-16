async function getGeonamesApiData (url) {
	let req = await fetch(url);
	try {
		const geonamesApiData = await req.json();
		return geonamesApiData;
	}
	catch(error) {
		console.log('Error with the Geonames API: ', error);
	}
}