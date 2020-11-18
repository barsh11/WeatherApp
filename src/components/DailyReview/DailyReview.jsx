import React from 'react';
import styled from 'styled-components';
import DailyMain from '../DailyMain/DailyMain';
import CurrDate from '../CurrDate/CurrDate';
import CurrLocation from '../CurrLocation/CurrLocation';

const Sdiv= styled.div`
    display: flex;
    flex-direction: column;

    margin: 4rem;
`;

const SDailyMain= styled(DailyMain)`
    align-self: center;
    
    margin-right: -30rem;
`;

const DailyReview= props => {

    return (
        <Sdiv
        className= {props.className}>
            <CurrLocation 
            city= {props.city}
            country= {props.country}/>
            <CurrDate 
            date= {props.date}/>
            <SDailyMain
            deg= {props.deg}
            description= {props.description} />
        </Sdiv>
    );
}

export default DailyReview;