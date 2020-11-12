import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import theme from '../styles/theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Main children={children} />
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default Layout;
