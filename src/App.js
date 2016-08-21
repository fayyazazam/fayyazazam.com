import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/less/bootstrap.less';
import './styles/custom-styles.css';

import HeaderNavigation from './HeaderNavigation';
import Body from './Body';
import Footer from './Footer';

global.React = React;

ReactDOM.render(
  <div>
    <HeaderNavigation />
    <Body />
    <Footer />
  </div>
  , document.getElementById('app'));
