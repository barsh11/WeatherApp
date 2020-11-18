import React from 'react';
import Typography from '../UI/Typography/Typography';
import styled from 'styled-components';

const SCurrParameterWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CurrParameter= props => {
    
    const renderUnit= label => {
        switch(label){
            case 'hight':
            case 'low':
                return '°'; 
            case 'wind':
                return 'mph'; 
            case 'rain':
                return '%'; 
            default:
                return '';
        }
    }
    
    return (
        <SCurrParameterWrapper
        className= {props.className}>
            <Typography 
            className= {props.className}
            typographyType= 'heading3'
            text= {props.value + renderUnit(props.label)}/>
            <Typography
            className= {props.className}
            typographyType= 'description'
            text= {props.label}/>
        </SCurrParameterWrapper>
    );
}

export default CurrParameter;