/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ForecastItem from './ForecastItem';

export default{
    title: 'ForecastItem',
    component: ForecastItem
}

const Template= args => <ForecastItem {...args} />

export const Default= Template.bind({});
Default.args={
    data: {
    date: '04.01',
    time: '6:00',
    description: 'cloudy',
    value: '4',
    }
}