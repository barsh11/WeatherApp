import React from 'react';
import styled from 'styled-components';
import Typography from '../UI/Typography/Typography';
import Icon from '../UI/Icon/Icon';

const SForcestItemWrapper= styled.div`
    padding: 0.8rem;
    height: 16rem;
    width: 15rem;
    min-width: 12rem;
    margin: 0.8rem;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SIcon= styled(Icon)`
    margin: 4px;
    margin-bottom: 6px;
`;

const ForecastItem= props => {
    
    return (
        <SForcestItemWrapper
        className= {props.className}>
            <Typography
            typographyType= 'body'
            capitalize= {false}
            text= {props.data.date} />
            <Typography
            typographyType= 'body'
            capitalize= {false}
            text= {props.data.time} />
            <SIcon
            name= {props.data.description}
            size= "2rem"/>
            <Typography
            typographyType= 'body'
            capitalize= {false}
            text= {props.data.value + '°'} />
        </SForcestItemWrapper>
    );
}

export default ForecastItem;