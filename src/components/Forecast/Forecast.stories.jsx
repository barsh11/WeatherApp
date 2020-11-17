/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Forecast from './Forecast';

export default{
    title: 'Forecast',
    component: Forecast
}

const Template= args => <Forecast {...args} />

export const Default= Template.bind({});
Default.args={}