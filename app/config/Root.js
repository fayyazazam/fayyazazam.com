import React from 'react';
import Tilt from 'react-tilt';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../components/App';

const Root = () => {
  return (
    <Tilt options={{ reverse: true, scale: 0.98, max: 5 }}>
      <div id="wrapper">
        <Router>
          {/* Configure paths and static components
              here (ie: Header, Footer etc) */}
          <Route path="/" component={App} />
        </Router>
      </div>
    </Tilt>
  );
};

export default Root;

