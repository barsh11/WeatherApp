/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CurrLocation from './CurrLocation';

export default{
    title: 'CurrLocation',
    component: CurrLocation
}

const Template= args => <CurrLocation {...args} />

export const Default= Template.bind({});
Default.args={
    city: 'New-York',
    country: 'US'
}