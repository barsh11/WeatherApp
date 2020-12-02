import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from '../Search/Search';
import CurrManager from '../CurrManager/CurrManager';
import DailyManager from '../DailyManager/DailyManager';
import ForecastManager from '../ForecastManager/ForcastManager';
import Loader from '../../components/UI/Loader/Loader';

const SWeatherManager= styled.div`
  height: 100%;
  width: 100%;
    
  display: grid;
  grid-template-rows: 1fr 3.5fr 2fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 56.25em){
    grid-template-rows: 1fr 3.5fr 2.5fr 2fr;
    grid template-columns: 1fr;
  }

  @media only screen and (max-width: 31.25em){
    grid-template-rows: 0.5fr 2fr 1.5fr 1fr;
    grid-gap: 0.8rem;
  }
`;

const SSearch= styled(Search)`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
`;

const SCurrManager= styled(CurrManager)`
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;

  justify-self: start;

  @media only screen and (max-width: 56.25em){
    grid-column: 1 / -1;
    justify-self: center;
  }
`;

const SDailyManager= styled(DailyManager)`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;

  @media only screen and (max-width: 56.25em){
    grid-row: 3 / span 1;
    grid-column: 1 / -1;
  }
`;

const SForecastManager= styled(ForecastManager)`
  grid-row: 3 / -1;
  grid-column: 1 / -1;

  @media only screen and (max-width: 56.25em){
    grid-row: 4 / -1;
  }
`;

const SLoader= styled(Loader)`
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
`;

const WeatherManager= (props) => {
  const [error, setError]= useState(false);
  const [locationKey, setLocationKey]= useState('');
  const [city, setCity]= useState('');
  const [country, setCountry]= useState('');

  useEffect(() => {
    if(error){
      setLocationKey('');
      setCity('');
      setCountry('');

      setError(false);
    }
  }, [error]);

  const onLocationChoiceHandler= (locationData) => {
    setLocationKey(locationData.locationKey);
    setCity(locationData.city);
    setCountry(locationData.countryId);
  }

  const onErrorHandler= (isError) => {
    setError(true);
  }
  
  return (
      <SWeatherManager 
      className={props.className}>
        <SSearch 
        onLocationChoice= {onLocationChoiceHandler}/>
        {!locationKey ? <SLoader /> :
        [<SCurrManager
        locationKey= {locationKey}
        onError= {onErrorHandler}
        data= {{
                city: city,
                country: country
        }}/>,
        <SDailyManager
        locationKey= {locationKey}/>,
        <SForecastManager 
        locationKey= {locationKey}/>]}
      </SWeatherManager>
  );
}

export default WeatherManager;
