import React from 'react';

import { GlobalStyle } from '../src/style/globalStyle';

export const decorators= [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
