import React, { useEffect, useState } from "react";
import axios from "../../services/axios-forecast";
import moment from 'moment';
import Forecast from "../../components/Forecast/Forecast";

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
                description: 'cloudy', // to be fixed with icons
                value: FtoC(el.Temperature.Value)
            }
        })
        setReuslts(forecastResults);
      })
      .catch((err) => {
        console.log(err); // to be exchanged with the error modal
        return [];
      });
  }
})    

  return (
      <Forecast
      className= {props.className} 
      data= {results}/>
  );
}

export default ForcastManager;
