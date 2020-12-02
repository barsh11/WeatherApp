import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography/Typography';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

const SWrapper= styled.div`
`;

const SErrorMessageWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: white;
    width: 25vw;
    height: 80vh;
    z-index: 101;
    box-shadow: 4px 2px 15px rgba(0,0,0,0.2);

    @media only screen and (max-width: 56.25em){
        width: 40vw;
    }

    @media only screen and (max-width: 31.25em){
        width: 60vw;
    }
`;

const SIconWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    

    text-align: center;
    background-color: #236f82;
    width: 100%;
    height: 55%;
    padding: 3rem;
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
    padding: 3rem;
`;


const ErrorMessage= props => {
    return (
        <SWrapper
        className= {props.className}>
            <Backdrop show= {props.show} clicked={props.closeErrorMessage}/>
            <SErrorMessageWrapper
            style= {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                <SIconWrapper>
                    <SIcon
                    name= 'error'
                    color= 'white'
                    size= '10rem'
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
                    <Button clicked={props.closeErrorMessage}>Retry</Button> {/* to be changed */}
                </SErrorDescription>
            </SErrorMessageWrapper>
        </SWrapper>
    );
}

export default ErrorMessage;