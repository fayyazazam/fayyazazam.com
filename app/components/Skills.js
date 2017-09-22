import React from 'react';

// Couldn't figure out how to
// manage variables in stateless
// component, so use SCSS to handle
// animations zzzz
const Skills = () => {
  return (
    <div style={{ float: 'right', width: '50%', marginTop: '5vh' }}>
      {/* Front End */}
      <div className="skill-container">
        <div className="circle-border">
          <span className="fa fa-desktop fa-2x" />
        </div>
        <div className="skill-text">
          <div>Angular 1-5, React, jQuery</div>
          <div>Appium, Mocha, Selenium</div>
          <div>Node, Gulp, Webpack</div>
        </div>
      </div>
      <div style={{ margin: '5vh 0 1vh' }}>
        <div className="button">HTML</div>
        <div className="button">JS</div>
        <div className="button">JSX</div>
        <div className="button">TS</div>
        <div className="button type">Front-End</div>
      </div>

      {/* Horizontal Line :| */}
      <div className="line" />

      {/* Back End */}
      <div style={{ margin: '1vh 0 5vh' }}>
        <div className="button">JAVA</div>
        <div className="button">JS</div>
        <div className="button">PHP</div>
        <div className="button">RB</div>
        <div className="button">SQL</div>
        <div className="button type">Back-End</div>
      </div>
      <div className="skill-container">
        <div className="circle-border">
          <span className="fa fa-database fa-2x" />
        </div>

        <div className="skill-text">
          <div>Express, Laravel, Rails, Spring</div>
          <div>Elastic, MongoDB</div>
          <div>Jenkins, TeamCity</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
