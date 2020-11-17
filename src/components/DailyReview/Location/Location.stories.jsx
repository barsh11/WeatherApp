/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Location from './Location';

export default{
    title: 'Location',
    component: Location
}

const Template= args => <Location {...args} />

export const Default= Template.bind({});
Default.args={
    city: 'New-York',
    country: 'US'
}