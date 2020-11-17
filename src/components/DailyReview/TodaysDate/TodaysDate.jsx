import React from 'react';
import styled from 'styled-components';

const Sp= styled.p`
    color: white;
    font-size: 3rem;
    margin-bottom: 3rem;
`;


const TodaysDate= props => {
    const today= props.date;
    const day= today.toLocaleString('default', { weekday: 'long' });
    const date= today.getDate();
    const month= today.toLocaleString('default', { month: 'long' });

    return (
        <Sp>
            {`${day} ${date} ${month}`}
        </Sp>
    );
}

export default TodaysDate;