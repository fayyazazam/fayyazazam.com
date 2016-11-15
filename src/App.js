import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';

import HeaderNavigation from './HeaderNavigation';
import Body from './Body';
import Footer from './Footer';

require('./styles/stylesheets/_All.scss');

global.React = React;

ReactDOM.render(
  <div>
    <HeaderNavigation />
    <Body />
    <Footer />
  </div>
  , document.getElementById('app'));
