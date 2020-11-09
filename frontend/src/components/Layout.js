import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import theme from '../styles/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Main children={children} />
    <Footer />
  </ThemeProvider>
);

export default Layout;
