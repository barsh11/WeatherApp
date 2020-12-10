import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import CurrContainer from "../CurrContainer/CurrContainer";
import DailyContainer from "../DailyContainer/DailyContainer";
import ForecastContainer from "../ForecastContainer/ForcastContainer";
import ErrorMessage from "../../components/UI/ErrorMessage/ErrorMessage";

const SWeatherContainer = styled.div`
grid-row: 2 / span 1;
grid-column: 1 / -1;

justify-self: start;
align-self: start;  

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

const WeatherContainer = (props) => {
  const [error, setError] = useState({ isError: false, message: "" });
  const [locationKey, setLocationKey] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {}, [error.isError]);

  const onLocationChoiceHandler = (locationData) => {
    setLocationKey(locationData ? locationData.locationKey : "");
    setCity(locationData ? locationData.city : "");
    setCountry(locationData ? locationData.countryId : "");
  };

  const onErrorHandler = (errMsg) => {
    if (!error.isError) {
      setError({ isError: true, message: errMsg });
    }
  };

  const confirmedErrorSolve = () => {
    if (error.isError) {
      onLocationChoiceHandler(null);
      setError({ isError: false, message: "" });
    }
  };

  return (
    <SWeatherContainer>
      <Search
        onLocationChoice={onLocationChoiceHandler}
        init={error.isError}
        onError={onErrorHandler}
      />
      {error.isError ? (
        <ErrorMessage
          show={true}
          closeErrorMessage={confirmedErrorSolve}
          message={error.message}
        />
      ) : !locationKey ? null : (
        [
          <CurrContainer
            onError={onErrorHandler}
            key={"CurrContainer"}
            locationKey={!error.isError ? locationKey : null}
            data={
              locationKey && {
                city: city,
                country: country,
              }
            }
          />,
          <DailyContainer
            onError={onErrorHandler}
            key={"DailyContainer"}
            locationKey={locationKey}
          />,
          <ForecastContainer
            onError={onErrorHandler}
            key={"ForecastContainer"}
            locationKey={locationKey}
          />,
        ]
      )}
    </SWeatherContainer>
  );
};

export default WeatherContainer;
