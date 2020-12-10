import React from "react";
import styled from "styled-components";
import CurrWeather from "../CurrWeather/CurrWeather";
import CurrDate from "../CurrDate/CurrDate";
import CurrLocation from "../CurrLocation/CurrLocation";

const SCurrConditions = styled.div`
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;

  justify-self: center;

  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  display: flex;
  flex-direction: column;

  margin: 4rem;

  @media only screen and (max-width: 56.25em) {
    align-items: center;
  }
`;

const CurrConditions = (props) => {
  return (
    <SCurrConditions className={props.className}>
      <CurrLocation
        data={
          props.data && { city: props.data.city, country: props.data.country }
        }
      />
      <CurrDate />
      <CurrWeather
        data={
          props.data && {
            deg: props.data.deg,
            description: props.data.description,
            iconSrc: props.data.iconSrc,
          }
        }
      />
    </SCurrConditions>
  );
};

export default CurrConditions;
