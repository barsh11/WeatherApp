import React from "react";
import axios from "../../services/axios-daily";
import CurrParameters from "../../components/CurrParameters/CurrParameters";

const DailyManager = (props) => {

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

  return (
    <CurrParameters
    data= { [{value: '6', label: 'hight'},
    {value: '3', label: 'low'},
    {value: '3.1', label: 'wind'},
    {value: '70', label: 'rain'},
    {value: '6:40', label: 'sunrise'},
    {value: '7:19', label: 'sunset'}] }/>
    />
  );
};

export default DailyManager;
