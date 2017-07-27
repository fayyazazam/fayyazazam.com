import React from 'react';

const App = () => {
  const link = 'https://github.com/fayyazazam/fayyazazam.github.io/tree/v1-react-site';

  return (
    <div id="header">
      <p id="heading">Fayyaz Azam</p>
      <p id="intro">
        Site being built, stay tuned. <br />
        Check out the V1 version <a href={link}>here</a>.
      </p>
    </div>
  );
};

export default App;
