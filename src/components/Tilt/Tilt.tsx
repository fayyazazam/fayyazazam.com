import React from 'react';

import isTouchDevice from './isTouchDevice';
import TiltBase, { TiltBaseProps } from './TiltBase';

const Tilt = (props: TiltBaseProps) => {
  // Disable Tilt on a touch device as it causes jerkiness
  if (isTouchDevice()) {
    return <div className={props.className}>{props.children}</div>;
  }

  return <TiltBase {...props} />;
};

export default Tilt;
