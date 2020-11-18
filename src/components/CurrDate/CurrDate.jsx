import React from 'react';
import Typography from '../UI/Typography/Typography';
import moment from 'moment';

const CurrDate= props => {
    let date= moment().format('dddd D MMMM');

    return (
        <Typography
        className= {props.className}
        typographyType= 'heading3'
        text= {date} />
    );
}

export default CurrDate;