import './css/TimelineConnector.css';

import React from 'react';

import bemBuilder from '../../utils/bemBuilder';

const { block, element } = bemBuilder('timeline-connector');

const TimelineConnector = () => {
  return (
    <div className={block()}>
      <hr className={element('line')} />
    </div>
  );
};

export default TimelineConnector;
