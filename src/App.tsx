import './css/App.scss';

import React from 'react';

import Tilt from './components/Tilt';
import Timeline from './components/Timeline';
import { POINTS } from './constants';
import bemBuilder from './utils/bemBuilder';

const { block, element } = bemBuilder('app');

const App = () => {
  const [activeTimeline, setActiveTimeline] = React.useState(POINTS.length - 1);

  const points = React.useMemo(() => {
    return POINTS.map((p, index) => ({
      ...p,
      onClick: () => setActiveTimeline(index)
    }));
  }, []);

  return (
    <div className={block()}>
      <Tilt className={element('tilt')}>
        <div className={element('header')}>Fayyaz Azam</div>
        <div className={element('body')}>Hi, thanks for dropping by</div>
        <Timeline>
          {points.map((p, index) => {
            return (
              <>
                <Timeline.Connector />
                <Timeline.Point
                  active={activeTimeline === index}
                  content={p.content}
                  label={p.label}
                  onClick={p.onClick}
                />
              </>
            );
          })}
        </Timeline>
        <div className={element('footer')}>LINKS HERE</div>
      </Tilt>
    </div>
  );
};

export default App;
