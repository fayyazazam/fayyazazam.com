import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Appear from 'react-appear';

var DoughnutChart = require("react-chartjs").Doughnut;

export default class Body extends React.Component {
  getTimeofDay() {
    var now = new Date();
    var hour = now.getHours();

    //24-hour hour format
    if(hour > 3 && hour < 12) {
      return "Morning";
    }
    if(hour >= 12 && hour < 17) {
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
          <Grid id="info">
            <Appear className="HeaderTransition">
              <h3 id="About">Good {this.getTimeofDay()}</h3>
            </Appear>
            <Appear className="HeaderTransition">
              <h3 id="Skills">Skills</h3>
            </Appear>
            <DoughnutChart data={[300, 50, 100]} width="600" height="250"/>
            <Appear className="HeaderTransition">
              <h3 id="Experiences">Experiences</h3>
            </Appear>
          </Grid>
        </div>
    );
  }
}
