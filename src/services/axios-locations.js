import axios from "axios";

const instance = axios.create({
  baseURL: "http://dataservice.accuweather.com/locations/v1/cities/search",
  params: {
    apikey: 'HOhjKEnfGfhjEi30ka9lXzZqFU0FXXwF'
  }
});

export default instance;