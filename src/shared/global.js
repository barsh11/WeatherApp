import { createGlobalStyle, css } from 'styled-components';

/*export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';*/

export const bodyStyles = css`
    font-family: 'Helvetica';
    color: #ccc;
    font-weight: 300;
    line-height: 1.6;
`;

export const htmlStyles = css`
    box-sizing: border-box;

    font-size: 67.5%; /*1rem==14px / 14px/16px=87.5%*/
`;

export const generalStyles= css`
    margin: 0;
    padding: 0;
    box-sizing: inherit;
`;


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        ${generalStyles}
    }    

    html{
        ${htmlStyles}
    }

    body {
        ${bodyStyles}
    }
`;