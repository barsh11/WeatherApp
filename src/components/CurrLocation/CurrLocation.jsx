import React from 'react';
import Typography from '../UI/Typography/Typography';

const CurrLocation= props => {

    return (
        <Typography 
        className= {props.className}
        typographyType= 'heading2'
        bold= {true}
        shadow= {true}
        text= {`${props.data?.city}, ${props.data?.country}`}
        />
    );
}

export default CurrLocation;