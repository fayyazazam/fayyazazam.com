import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

const Work = () => {
  return (
    // TO-DO:
    // What do you want to do here?
    // Create a linked list-esque timeline
    // <p>Work Tab</p>
    <div style={{ float: 'right', width: '50%', marginTop: '3vh' }}>
      <Timeline>
        <TimelineEvent
          title="Rise People"
          createdAt="2017.06"
          iconColor="#FF3D73"
        />
        <TimelineEvent
          title="Mojio"
          createdAt="2016.05 - 2016.12"
          iconColor="#FF3D73"
        />
      </Timeline>
    </div>
  );
};

export default Work;
