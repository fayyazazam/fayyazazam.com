import './css/Timeline.scss';

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

Timeline.Connector = TimelineConnector;
Timeline.Point = TimelinePoint;

export default Timeline;
