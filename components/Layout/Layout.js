import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { GlobalStyle } from '../../util/constant/styles';

const Layout = ({ children }) => <>
  <GlobalStyle />
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600|Rubik:400,500" rel="stylesheet" />
  </Head>
  {children}
</>;

Layout.propTypes = {
  children: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default Layout;
