import React, { useState } from 'react';
import styled from 'styled-components';

const Sp= styled.p`
    color: white;
    font-size: 6rem;
    font-weight: 400;
    margin-bottom: 0px;

    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);
`;


const Location= props => {
    const currLocation= useState({city: props.city, country: props.country})[0];

    return (
        // <Sp> // change naming
        //     {`${currLocation.city}, ${currLocation.country}`}
        // </Sp>
        <Typography size={3} text={`${currLocation.city}, ${currLocation.country}`} />
    );
}

export default Location;