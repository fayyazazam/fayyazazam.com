import React from 'react';

const Work = () => {
  return (
    <div style={{ float: 'right', width: '50%', marginTop: '3vh' }}>
      <section className="timeline-container">
        <div className="timeline-container-before" />
        {/* Rise People */}
        <div className="event">
          <div className="event-type now">
            <i className="fa fa-user fa-lg now-text" />
          </div>
          <div>
            <div className="company">Rise People, Vancouver</div>
            <div>06.2017</div>
            <div>Software Developer</div>
            <div className="action">
              .html .ts .php .rb
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-type-school" />
          <div>
            <div className="school">End UBC, BSc. Computer Science</div>
          </div>
        </div>

        {/* Mojio */}
        <div className="event">
          <div className="event-type">
            <i className="fa fa-car fa-lg" />
          </div>
          <div>
            <div className="company">Mojio, Vancouver</div>
            <div>05.2016 - 12.2016</div>
            <div>Software Developer Co-op</div>
            <div className="action">
              .coffee .cs
            </div>
          </div>
        </div>

        {/* ABB */}
        <div className="event">
          <div className="event-type">
            <i className="fa fa-truck fa-lg" />
          </div>
          <div>
            <div className="company">ABB, Richmond</div>
            <div>05.2015 - 12.2015</div>
            <div>Software Developer Co-op</div>
            <div className="action">
              .js .java
            </div>
          </div>
        </div>

        {/* GR */}
        <div className="event">
          <div className="event-type">
            <i className="fa fa-archive fa-lg" />
          </div>
          <div>
            <div className="company">Global Relay, Vancouver</div>
            <div>01.2015 - 04.2015</div>
            <div>QA Analyst Co-op</div>
            <div className="action">
              .java
            </div>
          </div>
        </div>

        <div className="event">
          <div className="event-type-school" />
          <div>
            <div className="school">Start UBC, BSc. Computer Science</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
