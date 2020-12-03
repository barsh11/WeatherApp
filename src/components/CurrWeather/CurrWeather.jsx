import React from 'react';
import styled from 'styled-components';
import Typography from '../UI/Typography/Typography';
import WeatherIcon from '../UI/WeatherIcon/WeatherIcon'

const SCurrWeatherWrapper= styled.div`
    display: flex;
    align-items: center;

    align-self: center;
    
    margin-right: -13rem;

    @media only screen and (max-width: 75em){
        margin-right: 0;
    }
`;

const SCurrWeather= styled.div`
    font-weight: 100;
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
`;

const CurrWeather= props => {

    return (
        <SCurrWeatherWrapper
        className= {props.className}>
            <WeatherIcon
            src= {props.data?.iconSrc}
            size= 'big' />
            <SCurrWeather>
                <Typography
                    className= {props.className}
                    typographyType= 'heading1'
                    text= {(props.data?.deg + '°')} />
                <Typography 
                    className= {props.className}
                    typographyType= 'heading3'
                    text= {props.data?.description}/>
            </SCurrWeather>
        </SCurrWeatherWrapper>
    );
}

export default CurrWeather;