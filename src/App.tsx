import './css/App.scss';

import React from 'react';

import ActivePoint from './components/ActivePoint';
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
        <div className={element('body')}>Hi,</div>
        <ActivePoint activeTimeline={activeTimeline} />
        <Timeline>
          {points.map(({ date, onClick, title }, index) => {
            return (
              <React.Fragment key={title}>
                {index !== 0 && <Timeline.Connector />}
                <Timeline.Point
                  active={activeTimeline === index}
                  current={index === points.length - 1}
                  date={date}
                  onClick={onClick}
                  title={title}
                />
              </React.Fragment>
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
                target="_blank"
                rel="noreferrer"
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
