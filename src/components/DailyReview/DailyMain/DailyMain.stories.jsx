/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DailyMain from './DailyMain';

export default{
    title: 'DailyMain',
    component: DailyMain
}

const Template= args => <DailyMain {...args} />

export const Default= Template.bind({});
Default.args={
    deg: '5',
    description: 'overcast clouds'
}