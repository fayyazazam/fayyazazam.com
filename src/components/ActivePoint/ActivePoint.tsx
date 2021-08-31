import './css/ActivePoint.css';

import React from 'react';

import { POINTS } from './../../constants';
import bemBuilder from './../../utils/bemBuilder';
import usePrevious from './../../utils/usePrevious';

const { block, element } = bemBuilder('active-point');

type ActivePointProps = {
  activeTimeline: number;
};

const ActivePoint = ({ activeTimeline }: ActivePointProps) => {
  const [showHelperText, setShowHelperText] = React.useState(true);
  const previousActiveTimeline = usePrevious(activeTimeline);

  React.useEffect(() => {
    if (showHelperText && activeTimeline !== previousActiveTimeline) {
      setShowHelperText(false);
    }
  }, [
    activeTimeline,
    previousActiveTimeline,
    showHelperText,
    setShowHelperText
  ]);

  const activePoint = React.useMemo(() => {
    return POINTS[activeTimeline];
  }, [activeTimeline]);

  return (
    <article className={block()}>
      <div className={element('text')}>{activePoint.text}</div>
      {Boolean(activePoint.skills?.length) && (
        <div className={element('skills')}>
          {activePoint.skills.join(' | ')}
        </div>
      )}
      {showHelperText && (
        <div className={element('helper-text')}>
          *Click around to find out more
        </div>
      )}
    </article>
  );
};

export default ActivePoint;
