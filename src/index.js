import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import CreatePageRouter from './CreatePageRouter';
import rootReducer from './redux';
import theme from './styles/theme';
import './styles/reset.scss';
import './styles/common.scss';

const store = createStore(rootReducer);
const location = document.location.href.split('http://localhost:3000')[1];

if (location.includes('/create')) {
  ReactDOM.render(<CreatePageRouter />, document.getElementById('root'));
} else {
  ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle />
      <GlobalFonts />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
}
