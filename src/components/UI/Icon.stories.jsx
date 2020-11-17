/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Icon from './Icon';

export default{
    title: 'Icon',
    component: Icon
}

const Template= args => <Icon {...args} />

export const Search= Template.bind({});
Search.args={
    name: "search",
    color: "lightcoral",
    size: "2rem"
}