import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const SErrorMessageWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    width: 20%;
    height: 500px; /*to be changed*/
    z-index: 101;
    box-shadow: 4px 2px 15px rgba(0,0,0,0.2);
`;

const SIconWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    

    background-color: #236f82;
    width: 100%;
    height: 55%;
`;

const SIcon= styled(Icon)`
    margin-bottom: 2rem;
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
                <SIcon
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
                <Button>Retry</Button> {/* to be changed */}
            </SErrorDescription>
        </SErrorMessageWrapper>
    );
}

export default ErrorMessage;