import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../../UI/icons/Icon';

const Sdiv= styled.div`
    display: flex;
    align-items: center;
`;

const SInnerdiv= styled.div`
    color: white;
    font-size: 8rem;
    font-weight: 100;
    margin-left: 1rem;

    display: flex;
    flex-direction: column;
`;

const Sspan= styled.div`
    font-size: 3rem;
    
    &:first-letter{
        text-transform: uppercase;
    }
`;

const DailyMain= props => {
    const dailyInfo= useState({deg: props.deg, description: props.description})[0];

    return (
        <Sdiv
        className= {props.className}>
            <Icon
            name= "cloud"
            color= "white"
            size= "18rem" />
            <SInnerdiv>
                <span>{dailyInfo.deg}<span>&deg;</span></span>
                <Sspan>{dailyInfo.description}</Sspan>
            </SInnerdiv>
        </Sdiv>
    );
}

export default DailyMain;