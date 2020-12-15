import React, { Suspense, useState } from "react";
import { SWeatherContainer } from './WeatherContainerStyle';

const Search= React.lazy(() => import('../Search/Search'));
const CurrContainer= React.lazy(() => import('../CurrContainer/CurrContainer'));
const DailyContainer= React.lazy(() => import('../DailyContainer/DailyContainer'));
const ForecastContainer= React.lazy(() => import('../ForecastContainer/ForcastContainer'));
const ErrorMessage= React.lazy(() => import('../../components/UI/ErrorMessage/ErrorMessage'));


const WeatherContainer = (props) => {
  const [error, setError] = useState({ isError: false, message: "" });
  const [locationKey, setLocationKey] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const onLocationChoiceHandler = (locationData) => {
    setLocationKey(locationData?.locationKey || "");
    setCity(locationData?.city || "");
    setCountry(locationData?.countryId || "");
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
      <Suspense fallback={<div> </div>}>
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
      </Suspense>
    </SWeatherContainer>
  );
};

export default WeatherContainer;
