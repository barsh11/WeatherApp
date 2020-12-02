import React, { useEffect, useState } from "react";
import axios from "../../services/axios-forecast";
import Forecast from "../../components/Forecast/Forecast";

const ForcastManager = (props) => {

useEffect(() => {
  const query = props.locationKey;
  if (query) {
    axios
      .get(`${query}`)
      .then((res) => {

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
      data= { [
        {date: '04.01', time: '06:00', description: 'cloudy', value: '4'},
        {date: '04.01', time: '09:00', description: 'cloudy', value: '3'},
        {date: '04.01', time: '12:00', description: 'cloudy', value: '2'},
        {date: '04.01', time: '15:00', description: 'cloudy', value: '5'},
        {date: '04.01', time: '18:00', description: 'cloudy', value: '8'},
        {date: '04.01', time: '21:00', description: 'cloudy', value: '9'},
        {date: '04.02', time: '00:00', description: 'cloudy', value: '7'},
        {date: '04.02', time: '03:00', description: 'cloudy', value: '5'},
        {date: '04.02', time: '05:00', description: 'cloudy', value: '4'},
        {date: '04.02', time: '07:00', description: 'cloudy', value: '5'},
        {date: '04.02', time: '09:00', description: 'cloudy', value: '6'},
        {date: '04.02', time: '13:00', description: 'cloudy', value: '6'}
    ] }/>
  );
}

export default ForcastManager;
