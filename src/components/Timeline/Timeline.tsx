import React from 'react';

import bemBuilder from '../../utils/bemBuilder';
import TimelineConnector from './TimelineConnector';
import TimelinePoint from './TimelinePoint';

const { block } = bemBuilder('timeline');

type TimelineProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Timeline = ({ children }: TimelineProps) => {
  return <div className={block()}>{children}</div>;
};

Timeline.TimelineConnector = TimelineConnector;
Timeline.TimelinePoint = TimelinePoint;

export default Timeline;
