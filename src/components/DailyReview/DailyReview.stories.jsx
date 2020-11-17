/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import DailyReview from './DailyReview';

export default{
    title: 'DailyReview',
    component: DailyReview
}

const Template= args => <DailyReview {...args} />

export const Default= Template.bind({});
Default.args={
    city: 'New-York',
    country: 'US',
    date: new Date(),
    deg: '5',
    description: 'overcast clouds'
}