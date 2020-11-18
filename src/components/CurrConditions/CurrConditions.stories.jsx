/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CurrConditions from './CurrConditions';

export default{
    title: 'CurrConditions',
    component: CurrConditions
}

const Template= args => <CurrConditions {...args} />

export const Default= Template.bind({});
Default.args={
    data: {
        city: 'New-York',
        country: 'US',
        deg: '5',
        description: 'overcast clouds'
    }
}