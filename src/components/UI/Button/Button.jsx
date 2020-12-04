import React from 'react';
import styled from 'styled-components';

const SButton= styled.button`
    border: none;
    cursor: pointer;
    padding: 1.8rem 3.2rem;
    border-radius: 100px;
    background-color: #236f82;

    text-transform: uppercase;
    color: white;
    font-size: 1.4;
    font-weight: 400;

    box-shadow: 4px 2px 15px rgba(0,0,0,0.2);

    & :active{
        outline: none;
    }

    @media only screen and (max-width: 56.25em){
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 31.25em){
        font-size: 1rem;
    }
`;

const Button= props => {
    return (
        <SButton onClick={props.clicked}>
            {props.children}
        </SButton>
    );
}

export default Button;