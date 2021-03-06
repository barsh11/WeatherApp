import React from 'react';
import styled from 'styled-components';

const setTypographySize= (type) => {
    switch(type){
        case 'heading1':
            return `
            7.6rem;

            @media only screen and (max-width: 37.25em){
                font-size: 6rem;
            }
            `;
        case 'heading2':
            return `
            5.8rem;
            `;
        case 'heading3':
            return `
            2.8rem;
            `;
        case 'body':
            return `
            2.2rem;
            `;
        case 'description': 
            return `
            2rem;
            `;
        default:
            return`
            1.5rem;
            `;
    }
}

const STypography= styled.div`
    font-size: ${props => setTypographySize(props.typographyType)};
    color: ${props => props.color};
    font-weight:  ${props => props.bold && `400`};
    text-transform: ${props => props.capitalize && `capitalize`};
    text-transform: ${props => props.uppercase && `uppercase`};
    text-shadow: ${props => props.shadow && `1px 2px 4px rgba(0,0,0,0.2)`};
`;

const Typography= (props) => {
    return (
        <STypography
        className= {props.className}
        typographyType= {props.typographyType || 'caption'}
        color= {props.color || 'white'}
        bold= {props.bold || false}
        capitalize= {props.capitalize || true}
        uppercase= {props.uppercase || false}
        shadow= {props.shadow || false}
        >
            {props.text || ''}
        </STypography>
    );
}

export default Typography;