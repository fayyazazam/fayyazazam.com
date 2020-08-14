import './css/App.scss';

import React from 'react';

import Tilt from './components/Tilt';
import Timeline from './components/Timeline';
import { LINKS, POINTS } from './constants';
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
        <div className={element('body')}>Hi, thanks for dropping by</div>
        <Timeline>
          {points.map(({ content, label, onClick }, index) => {
            return (
              <>
                <Timeline.Connector />
                <Timeline.Point
                  active={activeTimeline === index}
                  content={content}
                  label={label}
                  onClick={onClick}
                />
              </>
            );
          })}
        </Timeline>
        <div className={element('footer')}>
          <div className={element('footer-name')}>Fayyaz Azam</div>
          <div className={element('footer-links')}>
            {LINKS.map(({ label, link }) => (
              <a
                className={element('link')}
                key={label}
                href={link}
                rel="noreferrer"
                target="_blank"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default App;
