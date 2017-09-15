import React from 'react';

const Skills = () => {
  return (
    // TO-DO:
    // Circles with FontAwesome(?) icon inside
    //      ( Front End, Back End )
    // On hover: Circle becomes red -> Moves up
    //      and displays information below it
    // On hover out: Circle becomes black -> Moves down, hides info
    <div style={{ float: 'right', width: '50%', marginTop: '3vh' }}>
      {/* Back End */}
      <div className="circle-border">
        <span className="fa fa-database fa-2x" />
      </div>
      {/* Front End */}
      <div className="circle-border">
        <span className="fa fa-desktop fa-2x" />
      </div>
    </div>
  );
};

export default Skills;
