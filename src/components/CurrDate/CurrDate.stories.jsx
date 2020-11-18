/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CurrDate from './CurrDate';

export default{
    title: 'CurrDate',
    component: CurrDate
}

const Template= args => <CurrDate {...args} />

export const Default= Template.bind({});
Default.args={
    date: new Date()
}