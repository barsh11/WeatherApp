/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DailyExtra from './DailyExtra';

export default{
    title: 'DailyExtra',
    component: DailyExtra
}

const Template= args => <DailyExtra {...args} />
// const mock = { {value: '6', label: 'hight'},
// //     {value: '3', label: 'low'},
// //     {value: '3.1', label: 'wind'},
// //     {value: '70', label: 'rain'},
// //     {value: '6:40', label: 'sunrise'},
// //     {value: '7:19', label: 'sunset'}}
export const Default= Template.bind({});
Default.args={
    // data: mockData
}