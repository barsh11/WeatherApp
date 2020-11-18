/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Backdrop from './Backdrop';

export default{
    title: 'Backdrop',
    component: Backdrop
}

const Template= args => <Backdrop {...args} />

export const Default= Template.bind({});
Default.args={}