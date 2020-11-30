import axios from 'axios';
import * as axiosDefs from './axios-global';

const instance= axios.create({
    baseURL: axiosDefs.BASE_URL_CONDITIONS,
    params: {
        apikey: axiosDefs.API_KEY
    }
});

export default instance;