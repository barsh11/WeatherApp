/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Typography from './Typography';

export default{
    title: 'Typography',
    component: Typography
}

const Template= args => <Typography {...args} />

export const TypographyInstance= Template.bind({});
TypographyInstance.args={
    typographyType: 'heading3',
    color: 'white',
    bold: false,
    capitalize: true,
    uppercase: true,
    shadow: false,
    text: 'example'
}