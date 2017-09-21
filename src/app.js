import 'babel-polyfill';
import 'normalize.css';
import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui/styles';
import { ThemeProvider } from 'styled-components';

import materialUITheme from 'mui/themes/default';
import styledComponentsTheme from 'st-components/themes/default';
import App from 'containers/App';
import store from 'store';

injectTapEventPlugin();

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider theme={materialUITheme}>
          <ThemeProvider theme={styledComponentsTheme}>
            <Router>
              <Route component={Component} />
            </Router>
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );

render(App);

if (module.hot) module.hot.accept('components/App', () => render(App));
