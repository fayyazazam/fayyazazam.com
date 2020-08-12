import './css/App.scss';

import React from 'react';

import Tilt from './components/Tilt';
import bemBuilder from './utils/bemBuilder';

const { block, element } = bemBuilder('app');


const App = () => {
  return (
    <div className={block()}>
      <Tilt className={element('tilt')}>
        <div className={element('header')}>Fayyaz Azam</div>
        <div className={element('body')}>Hi, thanks for dropping by</div>
        <div className={element('footer')}>LINKS HERE</div>
      </Tilt>
    </div>
  );
};

export default App;
