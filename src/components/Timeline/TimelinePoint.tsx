import './css/TimelinePoint.css';

import cn from 'classnames';
import React from 'react';

import bemBuilder from '../../utils/bemBuilder';

const { block, element } = bemBuilder('timeline-point');

type TimelinePoint = {
  title: string;
  date: string;
  active?: boolean;
  current?: boolean;
  onClick?: () => void;
};

const TimelinePoint = ({
  active,
  current,
  date,
  onClick,
  title
}: TimelinePoint) => {
  return (
    <button className={block()} onClick={onClick}>
      <div
        className={cn(element('dot'), {
          [element('dot', 'active')]: active,
          [element('dot', 'current')]: current
        })}
      />
      <div className={element('content')}>
        <div
          className={cn(element('title'), {
            [element('title', 'active')]: active
          })}
        >
          {title}
        </div>
        <div className={element('date')}>{date}</div>
      </div>
    </button>
  );
};

export default TimelinePoint;
