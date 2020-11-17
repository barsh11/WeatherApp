import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './shared/global';
import img from './2794169.jpg';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import DailyReview from './components/DailyReview/DailyReview';
import DailyExtra from './components/DailyExtra/DailyExtra';
import Forecast from './components/Forecast/Forecast';

const Sdiv= styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;

  background-image: url(${img});  
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-rows: 1fr 1fr 3.5fr 2fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
`;

const SLabel= styled(Label)`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;

  justify-self: start;
  align-self: start;
`;

const SInput= styled(Input)`
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
`;

const SDailyReview= styled(DailyReview)`
  grid-row: 3 / span 1;
  grid-column: 1 / span 1;

  justify-self: start;
`;

const SDailyExtra= styled(DailyExtra)`
  grid-row: 3 / span 1;
  grid-column: 2 / span 1;
`;

const SForecast= styled(Forecast)`
  grid-row: 4 / -1;
  grid-column: 1 / -1;
`;

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Sdiv className="App">
        <SLabel />
        <SInput />
        <SDailyReview 
          city= 'New-York'
          country= 'US'
          date= {new Date()}
          deg= '5'
          description= 'overcast cloud'/>
        <SDailyExtra />
        <SForecast />
      </Sdiv> 
    </>
  );
}

export default App;
