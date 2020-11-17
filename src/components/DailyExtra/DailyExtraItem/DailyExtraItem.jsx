import React from 'react';
import styled from 'styled-components';

const Sdiv= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: white;

    & span{
       margin: 2px;
    }

    .unit, #value{
        font-size: 3rem;
    }

    #label{
        display: block;
        font-size: 2.2rem;
        text-transform: capitalize;
    }
`;

const DailyExtra= props => {

    // switch (label) {
    //     case 'hight':
    //     case 'low':
    //         return <span class= "unit">&deg;</span>; 
    //     case 'wind':
    //         return <span class= "unit">mph</span>; 
    //     case 'rain':
    //         return <span class= "unit">%</span>; 
    
    //     default:
    //         break;
    // }
    
    const renderUnit= label => { // switch
        if(label === 'hight' || label === 'low'){
        }
        if(label === 'wind'){
        }
        if(label === 'rain'){
        }
    }
    
    return ( // every html element ===> styled.element
        <Sdiv
        className= {props.className}>
            <span id= "value">{props.value}<span>{renderUnit(props.label)}</span></span>
            <span id= "label">{props.label}</span>
        </Sdiv>
    );
}

export default DailyExtra;