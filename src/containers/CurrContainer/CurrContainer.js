import React, { useCallback, useEffect, useState } from "react";
import { axiosConditions as axios } from "../../services/axios";
import _ from 'lodash';
import { getIconSrc } from '../../utilities/getIconSrc';
import CurrConditions from "../../components/CurrConditions/CurrConditions";
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

const CurrManager = (props) => {
  const [error, setError]= useState({error: false, message: ''});
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [iconNumber, setIconNumber]= useState(null);

  const {locationKey, onError}= props;

  const initState= useCallback(() => {
    setTemperature('');
    setDescription('');
    setIconNumber(null);
  }, [])

  const getState= useCallback((query, isActive) => {
    axios
    .get(`${query}`)
    .then((res) => {
      const results= _.cloneDeep(res.data[0]);
      if(isActive){
        setTemperature(results.Temperature.Metric.Value);
        setDescription(results.WeatherText);
        setIconNumber(results.WeatherIcon);
        setError({error: false, message: ''});
      }
    })
    .catch((err) => {
      onError(true);
      setError({error: true, message: err.message});
    });
  }, [onError])

  useEffect(() => {
    let isActive= true;

    const query = locationKey;
    if (query) {
      getState(query, isActive);
      /*axios
        .get(`${query}`)
        .then((res) => {
          const results= _.cloneDeep(res.data[0]);
          if(isActive){
            setTemperature(results.Temperature.Metric.Value);
            setDescription(results.WeatherText);
            setIconNumber(results.WeatherIcon);
            setError({error: false, message: ''});
          }
        })
        .catch((err) => {
          onError(true);
          setError({error: true, message: err.message});
        });*/
    } else{
      if(isActive){
        initState();
        /*setTemperature('');
        setDescription('');
        setIconNumber(null);*/
      }
    }

    return () => {
      isActive= false;
    }
  }, [locationKey, onError, getState, initState]);

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
        iconSrc: getIconSrc(iconNumber)
      }}
    />
  );
};

export default CurrManager;
