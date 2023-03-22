import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Header from './components/Header';
import Main from './components/Main';
import Story from './components/Story';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main />
      <Story />
    </ThemeProvider>
  </React.StrictMode>
);
