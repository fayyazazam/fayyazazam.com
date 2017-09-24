import React from 'react';
import Tilt from 'react-tilt';
import { HashRouter as Router, Route } from 'react-router-dom';

// Import local components
import Header from '../components/Header';
import Intro from '../components/Intro';
import Work from '../components/Work';
import Skills from '../components/Skills';

// import rotate-phone jpg
import RotatePhone from '../assets/images/rotate-phone.jpg';

const Root = () => {
  return (
    <Tilt options={{ reverse: true, scale: 0.99, max: 2 }}>
      <div id="wrapper">
        <div id="padding">
          <Router className="pull-right">
            {/* Configure paths and static components
                here (ie: Header, Footer etc) */}
            <div>
              <Header />
              <Intro />
              <Route exact path="/" component={ Work } />
              <Route path="/skills" component={ Skills } />
            </div>
          </Router>
        </div>
      </div>
      <div id="small-phone">
        <img src={ RotatePhone } alt="" width="150px" />
        <p>For optimal viewing please either expand your browser window
        or turn your phone to landscape mode :)</p>
      </div>
    </Tilt>
  );
};

export default Root;

