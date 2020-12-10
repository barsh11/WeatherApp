import React from "react";
import styled from "styled-components";
import CurrParameter from "../CurrParameter/CurrParameter";

const SCurrParametersWrapper = styled.div`
  grid-row: 2 / span 1;
  grid-column: 2 / span 1;

  @media only screen and (max-width: 56.25em) {
    grid-row: 3 / span 1;
    grid-column: 1 / -1;
  }

  width: 85%;
  min-width: 320px;
  max-width: 510px;
  height: 55%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 1rem 2rem;

  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;

  @media only screen and (max-width: 56.25em) {
    height: 70%;
  }

  @media only screen and (max-width: 31.25em) {
    width: 95%;
  }
`;

const CurrParameters = (props) => {
  const renderCurrParameter = (value, label) => {
    return <CurrParameter key={label} value={value} label={label} />;
  };

  return (
    <SCurrParametersWrapper className={props.className}>
      {props.data?.map((el) => renderCurrParameter(el.value, el.label))}
    </SCurrParametersWrapper>
  );
};

export default CurrParameters;
