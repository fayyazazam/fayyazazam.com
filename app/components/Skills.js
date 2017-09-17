import React from 'react';

const Skills = () => {
  return (
    // TO-DO:
    // Circles with FontAwesome(?) icon inside
    //      ( Front End, Back End )
    // On hover: Circle becomes red -> Moves up
    //      and displays information below it
    // On hover out: Circle becomes black -> Moves down, hides info
    <div style={{ float: 'right', width: '50%', marginTop: '5vh' }}>
      {/* Front End */}
      <div className="skill-container">
        <div className="circle-border">
          <span className="fa fa-desktop fa-2x" />
        </div>
      </div>
      <div style={{ margin: '5vh 0 1vh' }}>
        <div className="button">HTML</div>
        <div className="button">JS</div>
        <div className="button">TS</div>
        <div className="button">JSX</div>
        <div className="button type">Front-End</div>
      </div>
      <div className="line" />
      <div style={{ margin: '1vh 0 5vh' }}>
        <div className="button">JAVA</div>
        <div className="button">PHP</div>
        <div className="button">RB</div>
        <div className="button">JS</div>
        <div className="button">SQL</div>
        <div className="button type">Back-End</div>
      </div>
      {/* Back End */}
      <div className="skill-container">
        <div className="circle-border">
          <span className="fa fa-database fa-2x" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
