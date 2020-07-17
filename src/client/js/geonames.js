const getCoordinates = async(geonamesUrl, cityInput, geonamesApiKey) => {
    const response = await fetch(geonamesUrl + cityInput + "&maxRows=10&" + "username=" + geonamesApiKey);
  try {
    const cityData = await response.json();
    return cityData;
  } catch(error) {
    console.log("getCoordinates error!", error);
  }
};

export { getCoordinates }