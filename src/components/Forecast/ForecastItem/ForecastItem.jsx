import React from 'react';
import styled from 'styled-components';
import Icon from '../../UI/Icon';

const Sdiv= styled.div`
    padding: 0.8rem;
    height: 16rem;
    min-width: 12rem;
    margin: 0.8rem;
    border-radius: 3px;
    color: white;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & span{
        display: block;
        margin: 2px;
    }
`;

const SIcon= styled(Icon)`
    margin: 4px;
    margin-bottom: 6px;
`;

const ForecastItem= props => {
    
    return (
        <Sdiv
        className= {props.className}>
            <span>{props.date}</span>
            <span>{props.hour}</span>
            <SIcon
            name= {props.description}
            size= "2rem"/>
            <span>{props.value}&deg;</span>
        </Sdiv>
    );
}

export default ForecastItem;