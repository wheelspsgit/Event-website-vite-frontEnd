const CITY_BASE = "http://localhost:8080/api/v1/City/";

const cityEndpoints = {
  getCity: `${CITY_BASE}GetCity`,
  addCity: `${CITY_BASE}addCity`,
  updateCity: `${CITY_BASE}UpdateCity`,
  deleteCity: `${CITY_BASE}delete`,
};

export default cityEndpoints;
