import axios from 'axios';
import * as axiosDefs from '../constants/axios';

const createInstance= (url, queryParams) => {
    const instance= axios.create({
        baseURL: url,
        params:{
            apikey: axiosDefs.API_KEY,
            ...queryParams
        }
    })
    return instance;
}

export const axiosConditions= createInstance(axiosDefs.BASE_URL_CONDITIONS, null);

export const axiosDaily= createInstance(axiosDefs.BASE_URL_DAILY, {details: true});

export const axiosForecast= createInstance(axiosDefs.BASE_URL_FORECAST, null);

export const axiosLocations= createInstance(axiosDefs.BASE_URL_LOCATIONS, null);