import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';
import Logo from './stitches.svg';
import { globalCss } from '@stitches/react';
import '../../LessPerfectDOSVGA.ttf';

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'LessPerfectDOSVGA',
    src: 'local("LessPerfectDOSVGA"), url("LessPerfectDOSVGA.ttf")',
  },
});

export const MdxLayout = ({ components = {}, onSwitch, ...rest }) => {
  globalStyles();
  return (
    <MDXProvider components={{ ...components }}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />
      <CoreLayout logo={<img src={Logo} width="40px" />} {...rest} />
    </MDXProvider>
  );
};
