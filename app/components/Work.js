import React from 'react';

const Work = () => {
  return (
    // TO-DO:
    // What do you want to do here?
    // Create a linked list-esque timeline
    // <p>Work Tab</p>
    <div style={{ float: 'right', width: '50%', marginTop: '3vh' }}>
      <section className="timeline-container">
        <div className="timeline-container-before" />
        {/* Rise People */}
        <div className="event">
          <div className="event-type now">
            <span className="material-icons" />
          </div>
          <div className="event-container">
            <div className="event-container-before" />
            <div>
              <div className="company">Rise People, Vancouver</div>
              <div>2017.06</div>
              <div>Software Developer</div>
            </div>
          </div>
        </div>

        {/* Mojio */}
        <div className="event">
          <div className="event-type">
            <span className="material-icons" />
          </div>
          <div className="event-container">
            <div className="event-container-before" />
            <div>
              <div className="company">Mojio, Vancouver</div>
              <div>2016.05 - 2016.12</div>
              <div>Software Developer Co-op</div>
            </div>
          </div>
        </div>

        {/* ABB */}
        <div className="event">
          <div className="event-type">
            <span className="material-icons" />
          </div>
          <div className="event-container">
            <div className="event-container-before" />
            <div>
              <div className="company">ABB, Richmond</div>
              <div>2015.05 - 2015.12</div>
              <div>Software Developer Co-op</div>
            </div>
          </div>
        </div>

        {/* GR */}
        <div className="event">
          <div className="event-type">
            <span className="material-icons" />
          </div>
          <div className="event-container">
            <div className="event-container-before" />
            <div>
              <div className="company">Global Relay, Vancouver</div>
              <div>2015.01 - 2015.04</div>
              <div>QA Analyst Co-op</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
