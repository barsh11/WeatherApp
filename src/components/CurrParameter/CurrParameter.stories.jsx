/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CurrParameter from './CurrParameter';

export default{
    title: 'CurrParameter',
    component: CurrParameter
}

const Template= args => <CurrParameter {...args} />

export const Default= Template.bind({});
Default.args={
    value: '6',
    label: 'hight'
}