import React from 'react';
import styled from 'styled-components';
import CurrWeather from '../CurrWeather/CurrWeather';
import CurrDate from '../CurrDate/CurrDate';
import CurrLocation from '../CurrLocation/CurrLocation';

const Sdiv= styled.div`
    display: flex;
    flex-direction: column;

    margin: 4rem;
`;

const SCurrWeather= styled(CurrWeather)`
    align-self: center;
    
    margin-right: -30rem;
`;

const DailyReview= props => {

    return (
        <Sdiv
        className= {props.className}>
            <CurrLocation 
            city= {props.city}
            country= {props.country}/>
            <CurrDate 
            date= {props.date}/>
            <SCurrWeather
            deg= {props.deg}
            description= {props.description} />
        </Sdiv>
    );
}

export default DailyReview;