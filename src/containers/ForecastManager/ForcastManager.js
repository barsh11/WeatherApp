import React, { useEffect, useState } from "react";
import { axiosForecast as axios } from "../../services/axios";
import moment from 'moment';
import Forecast from "../../components/Forecast/Forecast";
import { getIconSrc } from '../../utiles/getIconSrc';

const FtoC= (fDeg) => {
    return ((fDeg-32)*(5/9)).toFixed(1);    
}

const toLocalDate= (ISO8601String) => {
    const ISODate= moment.utc().format(ISO8601String);
    const utcDate= moment.utc(ISODate).toDate();
    return moment(utcDate).local().format('DD.MM');
}

const toLocalTime= (ISO8601String) => {
    const ISODate= moment.utc().format(ISO8601String);
    const utcDate= moment.utc(ISODate).toDate();
    return moment(utcDate).local().format('HH:mm');
}

const ForcastManager = (props) => {
const [results, setReuslts]= useState([]);

useEffect(() => {
  const query = props.locationKey;
  if (query) {
    axios
      .get(`${query}`)
      .then((res) => {
        let forecastResults= res.data.map(a => ({...a}));
        forecastResults= forecastResults.map(el => {
            return {
                date: toLocalDate(el.DateTime),
                time: toLocalTime(el.DateTime),
                value: FtoC(el.Temperature.Value),
                iconSrc: getIconSrc(el.WeatherIcon)
            }
        })
        setReuslts(forecastResults);
      })
      .catch((err) => {
        console.log(err); // to be exchanged with the error modal
        return [];
      });
    }
  }, [props.locationKey]);  

  return (
      <Forecast
      className= {props.className} 
      data= {results}/>
  );
}

export default ForcastManager;
