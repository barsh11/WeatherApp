import React, { useEffect, useState } from "react";
import { axiosConditions as axios } from "../../services/axios";
import CurrConditions from "../../components/CurrConditions/CurrConditions";
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

const CurrManager = (props) => {
  const [error, setError]= useState({error: false, message: ''});
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
          setError({error: false, message: ''});
        })
        .catch((err) => {
          setError({error: true, message: err.message});
          props.onError(true);
        });
    }
  }, [props]);

  const errorConfirmedHandler = () => {
    setError({error: false, message: ''});
  };

  return (
    error.error ? <ErrorMessage 
    show= {error.error} 
    closeErrorMessage= {errorConfirmedHandler}
    message= {error.message}/> :
    <CurrConditions
    className= {props.className}
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
