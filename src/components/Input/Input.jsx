import React from 'react';
import styled from 'styled-components';
import Icon from '../UI/Icon';

const Sdiv= styled.div`
    display: flex;
    align-items: center;

    width: 50%;
`;

const SInput= styled.input`
    border: none;
    
    width: 100%;
    border-radius: 5rem;
    padding: 2.5rem 5.5rem 2.5rem 6rem;
    box-shadow: 4px 2px 15px rgba(0,0,0,0.2);
    
    &::placeholder{
        color: #8c918d;
        font-size: 2.5rem;
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
        <Sdiv
        className= {props.className}>
            <SIcon 
            name= "search"
            color= "#ccc"
            size= "3rem" />
            <SInput 
            placeholder= "new york"
            />
        </Sdiv>
    );
}

export default Input;