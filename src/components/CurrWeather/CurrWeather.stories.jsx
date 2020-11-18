/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CurrWeather from './CurrWeather';

export default{
    title: 'CurrWeather',
    component: CurrWeather
}

const Template= args => <CurrWeather {...args} />

export const Default= Template.bind({});
Default.args={
    data: {
        deg: '5',
        description: 'overcast clouds'
    }
}