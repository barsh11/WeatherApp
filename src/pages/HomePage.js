import React from "react";
import GlobalStyle from "../style/globalStyle";
import WeatherContainer from "../containers/WeatherContainer/WeatherContainer";
import { SContainer, SAppTitle } from "./HomePageStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <SContainer>
        <SAppTitle
          typographyType="heading3"
          uppercase={true}
          text="weather app"
        />
        <WeatherContainer />
      </SContainer>
    </>
  );
}

export default App;
