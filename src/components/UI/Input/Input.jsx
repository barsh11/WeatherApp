import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

const SInputWrapper= styled.div`
    display: flex;
    align-items: center;

    width: 70rem;

    @media only screen and (max-width: 56.25em){
        width: 80%;
    }
`;

const SInput= styled.input`
    border: none;
    
    width: 100%;
    font-size: 2.2rem;
    border-radius: 5rem;
    padding: 2.5rem 4.5rem 2.5rem 5rem;
    box-shadow: 4px 2px 15px rgba(0,0,0,0.2);
    
    &::placeholder{
        color: #8c918d;
        font-size: 2.5rem;

        transform: translateY(0.4rem);
    }

    &:focus{
        outline: none;
    }
`;

const SIcon= styled(Icon)`
    transform: translate(4.5rem, 0.3rem);
`;

const Input= props => {
    return (
        <SInputWrapper
        className= {props.className}>
            <SIcon 
            name= "search"
            color= "#ccc"
            size= "3rem" />
            <SInput 
            placeholder= "Search for a city..."
            type= "search"
            onChange= {props.changed}
            value= {props.value}
            />
        </SInputWrapper>
    );
}

export default Input;