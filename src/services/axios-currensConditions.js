import axios from "axios";

const instance = axios.create({
  baseURL: "http://dataservice.accuweather.com/currentconditions/v1/",
  params: {
    apikey: 'HOhjKEnfGfhjEi30ka9lXzZqFU0FXXwF'
  }
});

export default instance;