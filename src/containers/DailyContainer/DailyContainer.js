import React, { useCallback, useEffect, useState } from "react";
import { axiosDaily as axios } from "../../services/axios";
import _ from "lodash";
import moment from "moment";
import CurrParameters from "../../components/CurrParameters/CurrParameters";

const FtoC = (fDeg) => {
  return ((fDeg - 32) * (5 / 9)).toFixed(1);
};

const toLocalTime = (ISO8601String) => {
  const ISODate = moment.utc().format(ISO8601String);
  const utcDate = moment.utc(ISODate).toDate();
  return moment(utcDate).local().format("HH:mm");
};

const DailyManager = (props) => {
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [lowTemperature, setLowTemperature] = useState("");
  const [highTemperature, setHighTemperature] = useState("");
  const [rainProb, setRainProb] = useState("");
  const [wind, setWind] = useState("");

  const {locationKey, onError}= props;

  const initState= useCallback(() => {
    setSunrise("");
    setSunset("");
    setLowTemperature("");
    setHighTemperature("");
    setRainProb("");
    setWind("");
  }, []);

  const getState= useCallback((query, isActive) => {
    axios
    .get(`${query}`)
    .then((res) => {
      const results = _.cloneDeep(res.data.DailyForecasts[0]);

      const sunriseTime = results.Sun.Rise;
      const sunsetTime = results.Sun.Set;
      if(isActive){
        setSunrise(toLocalTime(sunriseTime));
        setSunset(toLocalTime(sunsetTime));
        setLowTemperature(FtoC(results.Temperature.Minimum.Value));
        setHighTemperature(FtoC(results.Temperature.Maximum.Value));
        setRainProb(results.Day.RainProbability);
        setWind(results.Day.Wind.Speed.Value);
      }
    })
    .catch((err) => {
      onError(err);
      return [];
    });
  }, [onError])

  useEffect(() => {
    let isActive= true;

    const query = locationKey;
    if (query) {
      getState(query, isActive);
    } else {
      if(isActive){
        initState();
      }
    }

    return () => {
      isActive= false;
    }
  }, [locationKey, onError, getState, initState]);

  return (
    <CurrParameters
      className={props.className}
      data={[
        { value: highTemperature, label: "hight" },
        { value: lowTemperature, label: "low" },
        { value: wind, label: "wind" },
        { value: rainProb, label: "rain" },
        { value: sunrise, label: "sunrise" },
        { value: sunset, label: "sunset" },
      ]}
    />
  );
};

export default DailyManager;
