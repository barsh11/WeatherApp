import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Icon from '../Icon/Icon';

const SErrorMessageWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    width: 40%;
    height: 400px; /*to be changed*/
`;

const SIconWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    

    background-color: #236f82;
    width: 100%;
    height: 60%;
`;

const SErrorDescription= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 40%;
`;


const ErrorMessage= props => {
    return (
        <SErrorMessageWrapper>
            <SIconWrapper>
                <Icon
                name= 'error'
                color= 'white'
                size= '12rem'
                />
                <Typography 
                typographyType= 'caption'
                bold= {true}
                uppercase= {true}
                text= 'an error occured'/>
            </SIconWrapper>
            <SErrorDescription>
                <Typography 
                typographyType= 'caption'
                color= '#8c918d'
                text= {props.message}/>
                <button>Retry</button> {/* to be changed */}
            </SErrorDescription>
        </SErrorMessageWrapper>
    );
}

export default ErrorMessage;