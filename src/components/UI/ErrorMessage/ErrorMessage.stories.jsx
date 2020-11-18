/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ErrorMessage from './ErrorMessage';

export default{
    title: 'ErrorMessage',
    component: ErrorMessage
}

const Template= args => <ErrorMessage {...args} />

export const Default= Template.bind({});
Default.args={
    message: 'Some message'
}