import React, { useState } from 'react';
import styled from 'styled-components';
import ForecastItem from '../ForecastItem/ForecastItem';

const Sdiv= styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    & p{
        color: white;
        text-shadow: 1px 2px 4px rgba(0,0,0,0.2);
        font-size: 3rem;
    }
`;

const SInnerdiv= styled.div`
    display: flex;
    flex-wrap: no-wrap;

    height: 100%;
    overflow: scroll;
`;

const SForecastItem= styled(ForecastItem)`
    
`;

const Forecast= props => {
    const info= useState([
        {date: '04.01', hour: '06:00', description: 'cloudy', value: '4'},
        {date: '04.01', hour: '09:00', description: 'cloudy', value: '3'},
        {date: '04.01', hour: '12:00', description: 'cloudy', value: '2'},
        {date: '04.01', hour: '15:00', description: 'cloudy', value: '5'},
        {date: '04.01', hour: '18:00', description: 'cloudy', value: '8'},
        {date: '04.01', hour: '21:00', description: 'cloudy', value: '9'},
        {date: '04.02', hour: '00:00', description: 'cloudy', value: '7'},
        {date: '04.02', hour: '03:00', description: 'cloudy', value: '5'},
        {date: '04.02', hour: '05:00', description: 'cloudy', value: '4'},
        {date: '04.02', hour: '07:00', description: 'cloudy', value: '5'},
        {date: '04.02', hour: '09:00', description: 'cloudy', value: '6'},
        {date: '04.02', hour: '13:00', description: 'cloudy', value: '6'}
    ])[0];

    const renderForecastItem= (date, hour, description, value) => {
        return <SForecastItem
                date= {date}
                hour= {hour}
                description= {description} 
                value= {value}/>
    }

    return (
        <Sdiv
        className= {props.className}>
            <p>Forecast</p>
            <SInnerdiv>
                {info.map(el => renderForecastItem(el.date, el.hour, el.description, el.value))}
            </SInnerdiv>
        </Sdiv>
    );
}

export default Forecast;