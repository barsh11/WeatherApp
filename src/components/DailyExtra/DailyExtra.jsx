import React, { useState } from 'react';
import styled from 'styled-components';
import DailyExtraItem from './DailyExtraItem/DailyExtraItem';

const Sdiv= styled.div`
    width: 85%;
    height: 55%;
    background-color: rgba(255,255,255, 0.2);
    border-radius: 2rem;
    padding: 1rem 2rem;

    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
`;

const SDailyExtraItem= styled(DailyExtraItem)`

`;

const DailyExtra= props => {
    const info= useState([
        {value: '6', label: 'hight'},
        {value: '3', label: 'low'},
        {value: '3.1', label: 'wind'},
        {value: '70', label: 'rain'},
        {value: '6:40', label: 'sunrise'},
        {value: '7:19', label: 'sunset'}
    ])[0];

    const renderExtraItem= (value, label) => {
        return <SDailyExtraItem
                value= {value}
                label= {label} />
    }

    return (
        <Sdiv
        className= {props.className}>
            {info.map(el => renderExtraItem(el.value, el.label))}
        </Sdiv>
    );
}

export default DailyExtra;