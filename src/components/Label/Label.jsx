import React from 'react';
import styled from 'styled-components';

const Sdiv= styled.div`
    color: white;
    text-transform: uppercase;
    font-size: 3rem;
`;


const Label= props => {

    return (
        <Sdiv
        className= {props.className}>
            weather app
        </Sdiv>
    );
}

export default Label;