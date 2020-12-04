import React from 'react';
import styled from 'styled-components';

const setSize= (size) => {
    switch(size){
        case 'small':
            return '3.5rem';
        default: //big
            return `25rem;
            
            @media only screen and (max-width: 37.25em){
                width: 20rem;
            }`;
    }
}

const SImg= styled.img`
    width: ${props => setSize(props?.size)};
    height: auto;
`;

const WeatherIcon= (props) => {

    return(
        <SImg 
        className= {props.className}
        src= {props.src}
        size= {props.size}
        />
    );
}

export default WeatherIcon;