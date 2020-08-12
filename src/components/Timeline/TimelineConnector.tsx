import './css/TimelineConnector.scss';

import React from 'react';

import bemBuilder from '../../utils/bemBuilder';

const { block, element } = bemBuilder('timeline-connector');

const TimelineConnector = () => {
  return (
    <div className={block()}>
      <span className={element('line')} />
    </div>
  );
};

export default TimelineConnector;
