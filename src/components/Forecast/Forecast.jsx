import React from 'react';
import styled from 'styled-components';
import Typography from '../UI/Typography/Typography';
import ForecastItem from '../ForecastItem/ForecastItem';

const SForecastWrapper= styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

const SForecast= styled.div`
    display: flex;
    flex-wrap: no-wrap;

    height: 100%;
    overflow-x: scroll;
`;

const Forecast= props => {

    const renderForecastItem= ({date, time, description, value}) => {
        return <ForecastItem
                data= {{date: date, time: time, description: description, value: value}}/>
    }

    return (
        <SForecastWrapper
        className= {props.className}>
            <Typography
            typographyType= 'heading3'
            shadow= {true}
            text= 'forecast'/>
            <SForecast>
                {props.data && props.data.map(el => renderForecastItem({date: el.date, time: el.time, description: el.description, value: el.value}))}
            </SForecast>
        </SForecastWrapper>
    );
}

export default Forecast;