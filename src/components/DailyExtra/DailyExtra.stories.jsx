/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DailyExtra from './DailyExtra';

export default{
    title: 'DailyExtra',
    component: DailyExtra
}

const Template= args => <DailyExtra {...args} />

export const Default= Template.bind({});
Default.args={}