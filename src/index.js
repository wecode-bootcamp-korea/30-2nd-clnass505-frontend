import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import rootReducer from './redux';
import theme from './styles/theme';
import './styles/reset.scss';
import './styles/common.scss';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    {/* <ScrollToTop /> */}
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
