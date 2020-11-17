/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Label from './Label';

export default{
    title: 'Label',
    component: Label
}

const Template= args => <Label {...args} />

export const Default= Template.bind({});
Default.args={}