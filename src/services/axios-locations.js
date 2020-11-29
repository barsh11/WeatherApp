import axios from "axios";

const instance = axios.create({
  baseURL: "http://dataservice.accuweather.com/locations/v1/cities/search",
});

export default instance;
