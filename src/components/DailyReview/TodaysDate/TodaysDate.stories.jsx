/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import TodaysDate from './TodaysDate';

export default{
    title: 'TodaysDate',
    component: TodaysDate
}

const Template= args => <TodaysDate {...args} />

export const Default= Template.bind({});
Default.args={
    date: new Date()
}