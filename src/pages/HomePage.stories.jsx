/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import App from './HomePage';

export default{
    title: 'App',
    component: App
}

const Template= args => <App {...args} />

export const Default= Template.bind({});
Default.args={}