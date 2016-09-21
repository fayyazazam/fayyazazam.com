import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Appear from 'react-appear';
import {Doughnut} from 'react-chartjs-2';

var data = {
  labels: [
    "Java",
    "HTML / CSS",
    "Javascript / Coffeescript / JSX"
  ],
  datasets: [
    {
      data: [50, 15, 35],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ]
    }]
};

var options = {
  animation: {
    animateScale: true
  },
  tooltips: {
    enabled: false
  }
};

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
              <h3 id="About">Good {this.getTimeofDay()}!</h3>
            </Appear>
            <Doughnut data={data} options={options}/>
            <Appear className="HeaderTransition">
              <h3 id="Experiences">Experiences</h3>
            </Appear>
          </Grid>
        </div>
    );
  }
}
