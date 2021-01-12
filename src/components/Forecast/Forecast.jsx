import React from "react";
import styled from "styled-components";
import Typography from "../UI/Typography/Typography";
import ForecastItem from "../ForecastItem/ForecastItem";

const SForecastWrapper = styled.div`
  grid-row: 3 / -1;
  grid-column: 1 / -1;

  @media only screen and (max-width: 56.25em) {
    grid-row: 4 / -1;
  }

  display: flex;
  flex-direction: column;

  width: 100%;
`;

const SForecast = styled.div`
  display: flex;
  flex-wrap: no-wrap;

  height: 100%;
  overflow-x: hidden;

  &:active,
  &:hover,
  &:focus {
    overflow-x: scroll;
  }
`;

const Forecast = (props) => {
  const renderForecastItem = ({ date, time, value, iconSrc }) => {
    return (
      <ForecastItem
        key={time}
        data={{ date: date, time: time, value: value, iconSrc: iconSrc }}
      />
    );
  };

  return (
    <SForecastWrapper className={props.className}>
      <Typography typographyType="heading3" shadow={true} text="forecast" />
      <SForecast>
        {props.data?.map((el) =>
          renderForecastItem({
            date: el.date,
            time: el.time,
            value: el.value,
            iconSrc: el.iconSrc,
          })
        )}
      </SForecast>
    </SForecastWrapper>
  );
};

export default Forecast;
