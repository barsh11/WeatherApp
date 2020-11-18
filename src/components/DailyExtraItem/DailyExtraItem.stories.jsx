/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DailyExtraItem from './DailyExtraItem';

export default{
    title: 'DailyExtraItem',
    component: DailyExtraItem
}

const Template= args => <DailyExtraItem {...args} />

export const Default= Template.bind({});
Default.args={
    value: "6",
    label: 'hight'
}