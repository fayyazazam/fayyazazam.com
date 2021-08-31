import './css/Timeline.css';

import React from 'react';

import bemBuilder from '../../utils/bemBuilder';
import TimelineConnector from './TimelineConnector';
import TimelinePoint from './TimelinePoint';

const { block } = bemBuilder('timeline');

type TimelineProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Timeline = ({ children }: TimelineProps) => {
  return <section className={block()}>{children}</section>;
};

Timeline.Connector = TimelineConnector;
Timeline.Point = TimelinePoint;

export default Timeline;
