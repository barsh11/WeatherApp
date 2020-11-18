import React from 'react';
import styled from 'styled-components';

const setTypographySize= (type) => {
    switch(type){
        case 'heading1':
            return `
            8rem;
            `;
        case 'heading2':
            return `
            6rem;
            `;
        case 'heading3':
            return `
            3rem;
            `;
        case 'description':
            return `
            2.2rem;
            `;
        default: //caption
            return `
            2rem;
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
            {props.text || 'example text'}
        </STypography>
    );
}

export default Typography;