import React from 'react';

import bemBuilder from '../../utils/bemBuilder';

const { block, element } = bemBuilder('timeline-point');

type TimelinePoint = {
  label: string;
  content: string;
};

const TimelinePoint = ({ label, content }: TimelinePoint) => {
  return (
    <div className={block()}>
      <div className={element('label')}>{label}</div>
      <div className={element('content')}>{content}</div>
    </div>
  );
};

export default TimelinePoint;
