// API KEY
export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// BASE URL
export const BASE_URL = "https://dataservice.accuweather.com/";

// LOCATIONS
export const BASE_URL_LOCATIONS = `${BASE_URL}locations/v1/cities/autocomplete`;

// CONDITIONS
export const BASE_URL_CONDITIONS = `${BASE_URL}currentconditions/v1/`;

// DAILY
export const BASE_URL_DAILY = `${BASE_URL}forecasts/v1/daily/1day/`;

// FORECAST
export const BASE_URL_FORECAST = `${BASE_URL}forecasts/v1/hourly/12hour/`;
