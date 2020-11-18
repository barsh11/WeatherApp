/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Forecast from './Forecast';

export default{
    title: 'Forecast',
    component: Forecast
}

const Template= args => <Forecast {...args} />

export const Default= Template.bind({});
Default.args={
    data: [{date: '04.01', time: '06:00', description: 'cloudy', value: '4'},
        {date: '04.01', time: '09:00', description: 'cloudy', value: '3'},
        {date: '04.01', time: '12:00', description: 'cloudy', value: '2'},
        {date: '04.01', time: '15:00', description: 'cloudy', value: '5'},
        {date: '04.01', time: '18:00', description: 'cloudy', value: '8'},
        {date: '04.01', time: '21:00', description: 'cloudy', value: '9'},
        {date: '04.02', time: '00:00', description: 'cloudy', value: '7'},
        {date: '04.02', time: '03:00', description: 'cloudy', value: '5'},
        {date: '04.02', time: '05:00', description: 'cloudy', value: '4'},
        {date: '04.02', time: '07:00', description: 'cloudy', value: '5'},
        {date: '04.02', time: '09:00', description: 'cloudy', value: '6'},
        {date: '04.02', time: '13:00', description: 'cloudy', value: '6'}]
}