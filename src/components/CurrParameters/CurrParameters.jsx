import React from 'react';
import styled from 'styled-components';
import CurrParameter from '../CurrParameter/CurrParameter';

const SCurrParametersWrapper= styled.div`
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

    @media only screen and (max-width: 56.25em){
        height: 70%;
    }

    @media only screen and (max-width: 31.25em){
        width: 95%;
    }
`;

const CurrParameters= props => {

    const renderCurrParameter= (value, label) => {
        return <CurrParameter
                value= {value}
                label= {label} />
    }

    return (
        <SCurrParametersWrapper
        className= {props.className}>
            {props.data && props.data.map(el => renderCurrParameter(el.value, el.label))}
        </SCurrParametersWrapper>
    );
}

export default CurrParameters;