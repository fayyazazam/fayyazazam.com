import './css/TimelinePoint.scss';

import cn from 'classnames';
import React from 'react';

import bemBuilder from '../../utils/bemBuilder';

const { block, element } = bemBuilder('timeline-point');

type TimelinePoint = {
  content: string;
  label: string;
  onClick?: () => void;
  active?: boolean;
};

const TimelinePoint = ({ active, content, label, onClick }: TimelinePoint) => {
  return (
    <div className={block()} onClick={onClick}>
      <div className={element('label')}>{label}</div>
      <div
        className={cn(element('content'), {
          [element('content', 'active')]: active
        })}
      >
        {content}
      </div>
    </div>
  );
};

export default TimelinePoint;
