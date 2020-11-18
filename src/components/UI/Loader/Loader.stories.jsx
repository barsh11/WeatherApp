/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Loader from './Loader';

export default{
    title: 'Loader',
    component: Loader
}

const Template= args => <Loader {...args} />

export const Default= Template.bind({});
Default.args={}