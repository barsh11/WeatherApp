import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from '../Search/Search';
import CurrManager from '../CurrManager/CurrManager';
import CurrParameters from '../../components/CurrParameters/CurrParameters';
import Forecast from '../../components/Forecast/Forecast';

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

const SCurrParameters= styled(CurrParameters)`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;

  @media only screen and (max-width: 56.25em){
    grid-row: 3 / span 1;
    grid-column: 1 / -1;
  }
`;

const SForecast= styled(Forecast)`
  grid-row: 3 / -1;
  grid-column: 1 / -1;

  @media only screen and (max-width: 56.25em){
    grid-row: 4 / -1;
  }
`;

const WeatherManager= (props) => {
  const [isSearching, setIsSearching]= useState(false);
  const [locationKey, setLocationKey]= useState('');
  const [city, setCity]= useState('');
  const [country, setCountry]= useState('');

  const onSearchHandler= (inSearch) => {
    setIsSearching(inSearch);
  }

  const onLocationChoiceHandler= (locationData) => {
    setLocationKey(locationData.locationKey);
    setCity(locationData.city);
    setCountry(locationData.countryId);
  }
  
  return (
      <SWeatherManager 
      className={props.className}>
        <SSearch 
        onSearch= {onSearchHandler}
        onLocationChoice= {onLocationChoiceHandler}/>
        <SCurrManager
        locationKey= {locationKey}
        data= {{
                city: city,
                country: country
        }}/>
        <SCurrParameters
            data= { [{value: '6', label: 'hight'},
            {value: '3', label: 'low'},
            {value: '3.1', label: 'wind'},
            {value: '70', label: 'rain'},
            {value: '6:40', label: 'sunrise'},
            {value: '7:19', label: 'sunset'}] }/>
        <SForecast 
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
      </SWeatherManager>
  );
}

export default WeatherManager;
