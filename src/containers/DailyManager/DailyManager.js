import React, { useEffect, useState } from "react";
import axios from "../../services/axios-daily";
import moment from 'moment';
import CurrParameters from "../../components/CurrParameters/CurrParameters";

const FtoC= (fDeg) => {
    return ((fDeg-32)*(5/9)).toFixed(1);    
}

const toLocalTime= (ISO8601String) => {
    const ISODate= moment.utc().format(ISO8601String);
    const utcDate= moment.utc(ISODate).toDate();
    return moment(utcDate).local().format('HH:mm');
}

const DailyManager = (props) => {
    const [sunrise, setSunrise]= useState('');
    const [sunset, setSunset]= useState('');
    const [lowTemperature, setLowTemperature]= useState('');
    const [highTemperature, setHighTemperature]= useState('');
    const [rainProb, setRainProb]= useState('');
    const [wind, setWind]= useState('');

useEffect(() => {
  const query = props.locationKey;
  if (query) {
    axios
      .get(`${query}`)
      .then((res) => {
        const sunriseTime= res.data.DailyForecasts[0].Sun.Rise;
        const sunsetTime= res.data.DailyForecasts[0].Sun.Set;

        setSunrise(toLocalTime(sunriseTime));
        setSunset(toLocalTime(sunsetTime));
        setLowTemperature(FtoC(res.data.DailyForecasts[0].Temperature.Minimum.Value));
        setHighTemperature(FtoC(res.data.DailyForecasts[0].Temperature.Maximum.Value));
        setRainProb(res.data.DailyForecasts[0].Day.RainProbability);
        setWind(res.data.DailyForecasts[0].Day.Wind.Speed.Value);
      })
      .catch((err) => {
        console.log(err); // to be exchanged with the error modal
        return [];
      });
  }
})    


  return (
    <CurrParameters
    className= {props.className}
    data= { [{value: highTemperature, label: 'hight'},
    {value: lowTemperature, label: 'low'},
    {value: wind, label: 'wind'},
    {value: rainProb, label: 'rain'},
    {value: sunrise, label: 'sunrise'},
    {value: sunset, label: 'sunset'}] }/>
  );
};

export default DailyManager;
