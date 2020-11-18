/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Input from './Input';

export default{
    title: 'Input',
    component: Input
}

const Template= args => <Input {...args} />

export const Default= Template.bind({});
Default.args={}