import React, { useEffect, useState } from "react";
import axios from "../../services/axios-conditions";
import CurrConditions from "../../components/CurrConditions/CurrConditions";

const CurrManager = (props) => {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  // ICON is missing

  useEffect(() => {
    const query = props.locationKey;
    if (query) {
      axios
        .get(`${query}`)
        .then((res) => {
          setTemperature(res.data[0].Temperature.Metric.Value);
          setDescription(res.data[0].WeatherText);
        })
        .catch((err) => {
          console.log(err); // to be exchanged with the error modal
          return [];
        });
    }
  })

  return (
    <CurrConditions
      data={{
        city: props.data.city,
        country: props.data.country,
        deg: temperature,
        description: description,
      }}
    />
  );
};

export default CurrManager;
