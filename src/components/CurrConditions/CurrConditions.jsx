import React from 'react';
import styled from 'styled-components';
import CurrWeather from '../CurrWeather/CurrWeather';
import CurrDate from '../CurrDate/CurrDate';
import CurrLocation from '../CurrLocation/CurrLocation';

const SCurrConditions= styled.div`
    display: flex;
    flex-direction: column;

    margin: 4rem;
`;

const SCurrWeather= styled(CurrWeather)`
    align-self: center;
    
    margin-right: -13rem;

    @media only screen and (max-width: 75em){
        margin-right: 0;
    }
`;

const CurrConditions= props => {

    return (
        <SCurrConditions
        className= {props.className}>
            <CurrLocation 
            data= {props.data && {city: props.data.city, country: props.data.country}}
            />
            <CurrDate />
            <SCurrWeather
            data= {props.data && {deg: props.data.deg, description: props.data.description}}
            />
        </SCurrConditions>
    );
}

export default CurrConditions;