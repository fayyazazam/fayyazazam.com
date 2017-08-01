import React from 'react';

const Intro = () => {
  const link = 'https://github.com/fayyazazam/fayyazazam.github.io/tree/v1-react-site';
  return (
    <p className="pull-left">
      Site being built, stay tuned. <br />
      Check out the V1 version <a href={link}>here</a>.
    </p>
  );
};

export default Intro;
