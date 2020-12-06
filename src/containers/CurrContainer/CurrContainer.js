import React, { useCallback, useEffect, useState } from "react";
import { axiosConditions as axios } from "../../services/axios";
import _ from "lodash";
import { getIconSrc } from "../../utilities/getIconSrc";
import CurrConditions from "../../components/CurrConditions/CurrConditions";

const CurrManager = (props) => {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [iconNumber, setIconNumber] = useState(null);

  const { locationKey, onError } = props;

  const initState = useCallback(() => {
    setTemperature("");
    setDescription("");
    setIconNumber(null);
  }, []);

  const getState = useCallback(
    (query, isActive) => {
      axios
        .get(`${query}`)
        .then((res) => {
          const results = _.cloneDeep(res.data[0]);
          if (isActive) {
            setTemperature(results.Temperature.Metric.Value);
            setDescription(results.WeatherText);
            setIconNumber(results.WeatherIcon);
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

  return (
    <CurrConditions
      className={props.className}
      data={{
        city: props.data.city,
        country: props.data.country,
        deg: temperature,
        description: description,
        iconSrc: getIconSrc(iconNumber),
      }}
    />
  );
};

export default CurrManager;
