import React from 'react';
import styled from 'styled-components';
import Typography from '../UI/Typography/Typography';
import Icon from '../UI/Icon/Icon';

const SCurrWeatherWrapper= styled.div`
    display: flex;
    align-items: center;
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
            <Icon
            name= "cloud"
            color= "white"
            size= "18rem" />
            <SCurrWeather>
                <Typography
                    className= {props.className}
                    typographyType= 'heading1'
                    text= {props.data && (props.data.deg + '°')} />
                <Typography 
                    className= {props.className}
                    typographyType= 'heading3'
                    text= {props.data && props.data.description}/>
            </SCurrWeather>
        </SCurrWeatherWrapper>
    );
}

export default CurrWeather;