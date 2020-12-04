import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../style/globalStyle';
import Typography from '../components/UI/Typography/Typography';
import img from '../assets/coverPhoto.jpg';
import WeatherContainer from '../containers/WeatherContainer/WeatherContainer';

const SContainer= styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 4rem;

  background-image: url(${img});  
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-rows: 1fr 6.5fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 56.25em){
    grid-template-rows: 1fr 9fr;
    grid template-columns: 1fr;
  }

  @media only screen and (max-width: 31.25em){
    grid-template-rows: 0.3fr 5fr;
    grid-gap: 0.8rem;
  }
`;

const SAppTitle= styled(Typography)`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;

  justify-self: start;
  align-self: start;
`;

function App() {
  
  return (
    <>
      <GlobalStyle />
      <SContainer>
        <SAppTitle 
        typographyType= 'heading3'
        uppercase= {true}
        text= 'weather app'/>
       <WeatherContainer />
      </SContainer> 
    </>
  );
}

export default App;
