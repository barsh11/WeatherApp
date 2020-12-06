import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

const SWrapper= styled.div`
grid-row: 2 / span 1;
grid-column: 1 / -1;

@media only screen and (max-width: 56.25em){
    grid-row: 2 / span 2;
  }

position: relative;
width: 100%;
height: 100%;
`;

const SErrorMessageWrapper= styled.div`
height: 140%;
width: 25%;

@media only screen and (min-width: 75em){
    height: 140%;
    width: 30%;
}

@media only screen and (max-width: 75em){
    height: 120%;
    width: 35%;
}

@media only screen and (max-width: 56.25em){
    height: 100%;
    width: 45%;
  }

@media only screen and (max-width: 37.25em){
    height: 80%;
    width: 55%;
}

@media only screen and (max-width: 31.25em){
    height: 60%;
    width: 65%;
}

position: absolute;
margin: auto;
left: 0;
right: 0;

transition: all 0.3s ease-out;

display: grid;
  grid-template-rows: 1.8fr 1fr;
  grid-template-columns: 1fr;

    z-index: 101;
    text-align: center;
    box-shadow: 4px 2px 15px rgba(0,0,0,0.2);
`;

const SIconWrapper= styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;

  align-self: center;

  display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: 100%;
background-image: linear-gradient(to top, #083540, #236f82);

`;

const SDescriptionWrapper= styled.div`
    grid-row: 2 / span 1;
    grid-column: 1 / -1;

    justify-self: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;
    padding: 15px;
    background-color: #e1e3e1;

`;


const ErrorMessage= props => {

    return (
        <SWrapper>
            <Backdrop show= {props.show} clicked={props.closeErrorMessage}/>
            <SErrorMessageWrapper
            style= {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                <SIconWrapper>
                    <Icon
                    name= 'warning'
                    color= 'white'
                    size= '7rem'
                    />
                    <Typography 
                    typographyType= 'caption'
                    uppercase= {true}
                    text= 'an error occured'/>
                </SIconWrapper>
                <SDescriptionWrapper>
                    <Typography 
                    typographyType= 'caption'
                    color= '#8c918d'
                    text= {props.message}/>
                    <Button clicked={props.closeErrorMessage}>Retry</Button>
                </SDescriptionWrapper>
            </SErrorMessageWrapper>
        </SWrapper>
    );
}

export default ErrorMessage;