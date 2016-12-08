import React from 'react';
import ReactDOM from 'react-dom';

import HeaderNavigation from './HeaderNavigation';
import Body from './Body';
import Footer from './Footer';

require('./styles/stylesheets/_all.scss');

global.React = React;

ReactDOM.render(
  <div>
    <HeaderNavigation />
    <Body />
    <Footer />
  </div>
  , document.getElementById('app'));
