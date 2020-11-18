/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CurrParameters from './CurrParameters';

export default{
    title: 'CurrParameters',
    component: CurrParameters
}

const Template= args => <CurrParameters {...args} />

export const Default= Template.bind({});
Default.args={
    data: [{value: '6', label: 'hight'},
    {value: '3', label: 'low'},
    {value: '3.1', label: 'wind'},
    {value: '70', label: 'rain'},
    {value: '6:40', label: 'sunrise'},
    {value: '7:19', label: 'sunset'}]
}

