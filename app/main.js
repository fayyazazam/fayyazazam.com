import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer is required and
// components put into it for HMR
import { AppContainer } from 'react-hot-loader';

// Our Router Config
import Root from './config/Root';

// Require our stylesheet here
require('./assets/scss/main.scss');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

// HMR API
if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
