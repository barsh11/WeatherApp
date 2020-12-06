import React, { useCallback, useEffect, useState } from "react";
import { axiosForecast as axios } from "../../services/axios";
import _ from "lodash";
import moment from "moment";
import Forecast from "../../components/Forecast/Forecast";
import { getIconSrc } from "../../utilities/getIconSrc";

const FtoC = (fDeg) => {
  return ((fDeg - 32) * (5 / 9)).toFixed(1);
};

const toLocalDate = (ISO8601String) => {
  const ISODate = moment.utc().format(ISO8601String);
  const utcDate = moment.utc(ISODate).toDate();
  return moment(utcDate).local().format("DD.MM");
};

const toLocalTime = (ISO8601String) => {
  const ISODate = moment.utc().format(ISO8601String);
  const utcDate = moment.utc(ISODate).toDate();
  return moment(utcDate).local().format("HH:mm");
};

const ForcastManager = (props) => {
  const [results, setResults] = useState([]);

  const { locationKey, onError } = props;

  const initState = useCallback(() => {
    setResults([]);
  }, []);

  const getState = useCallback(
    (query, isActive) => {
      axios
        .get(`${query}`)
        .then((res) => {
          let forecastResults = _.cloneDeep(res.data);
          forecastResults = forecastResults.map((el) => {
            return {
              date: toLocalDate(el.DateTime),
              time: toLocalTime(el.DateTime),
              value: FtoC(el.Temperature.Value),
              iconSrc: getIconSrc(el.WeatherIcon),
            };
          });
          if (isActive) {
            setResults(forecastResults);
          }
        })
        .catch((err) => {
          onError(err);
          return [];
        });
    },
    [onError]
  );

  useEffect(() => {
    let isActive = true;

    const query = locationKey;
    if (query) {
      getState(query, isActive);
    } else {
      if (isActive) {
        initState();
      }
    }

    return () => {
      isActive = false;
    };
  }, [locationKey, onError, getState, initState]);

  return <Forecast className={props.className} data={results} />;
};

export default ForcastManager;
