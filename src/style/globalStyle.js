import { createGlobalStyle, css } from 'styled-components';

/*export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';*/

/*$bp-largest: 75em; //1200px
$bp-large: 68.75em; //1100px
$bp-medium: 56.25em; //900px
$bp-small:  37.5em; //600px
$bp-smallest: 31.25em; //500px*/

export const bodyStyles = css`
    font-family: 'Helvetica';
    color: #ccc;
    font-weight: 300;
    line-height: 1.6;
`;

export const htmlStyles = css`
    box-sizing: border-box;

    font-size: 62.5%; /*1rem==10px / 10px/16px=62.5%*/

    @media only screen and (max-width: 31.25em){
        font-size: 56.25%; /*1rem==9px / 9px/16px=56.25%*/
    }
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

export default GlobalStyle;