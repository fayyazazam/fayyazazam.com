import React from 'react';
import Scroll from 'react-scroll'
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

export default class Body extends React.Component {
  getTimeofDay() {
    var now = new Date();
    var hour = now.getHours();

    if(hour > 3 && hour < 12) {
      return "Morning";
    }
    else if(hour > 12 && hour < 5) {
      return "Afternoon";
    }
    else {
      return "Evening";
    }
  }

  render() {
    return (
        <div>
          <Jumbotron>
            <Grid>
              <h2>Site is under construction!</h2>
            </Grid>
          </Jumbotron>
          <Grid>
            <h3 id="About">Good {this.getTimeofDay()}</h3>
            <p>Based on users time</p>
            <h3 id="Skills">Skills</h3>
            <p>Table format</p>
            <h3 id="Experiences">Experiences</h3>
            <p>Paragraph : (image)</p>
          </Grid>
        </div>
    );
  }
}
