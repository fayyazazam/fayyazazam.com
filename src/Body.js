import React from 'react';
import WorkExperience from './WorkExperience';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Appear from 'react-appear';
import {Doughnut} from 'react-chartjs-2';

//Colors picked from http://www.w3schools.com/colors/colors_picker.asp
//hover background colour 5% darker than background color
var chartData = {
  labels: [
    "Java",
    "Javascript / Coffeescript",
    "HTML / CSS"
  ],
  datasets: [
    {
      data: [50, 35, 15],
      backgroundColor: [
        "#595959",
        "#8c8c8c",
        "#d9d9d9"
      ],
      hoverBackgroundColor: [
        "#4d4d4d",
        "#808080",
        "#cccccc"
      ]
    }]
};

var chartOptions = {
  animation: {
    animateScale: true
  },
  legend: {
    labels: {
      fontColor: "#808080",
      fontFamily: "Lato"
    }
  },
  hover: {
    mode: "label"
  },
  responsive: true,
  cutoutPercentage: 70
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

          {/*Jumbotron and text on it*/}
          <Jumbotron>
            <Grid>
              <h2>
                Site is under construction!
              </h2>
            </Grid>
          </Jumbotron>

          {/*The grid container which has the main body*/}
          <Grid id="info">
            {/*Header for about. Should say Good Morning/Evening/Night*/}
            <Row>
              <Appear className="HeaderTransition">
                <h3 id="About">
                  Good {this.getTimeofDay()}!
                </h3>
              </Appear>
            </Row>

            {/*About me text*/}
            <Row>
              <Col xs={4}>
                <h4>
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                  big body of text big body of text
                </h4>
              </Col>

              {/*Doughnut chart*/}
              <Col xs={8}>
                <Doughnut data={chartData} options={chartOptions} />
              </Col>
            </Row>

            {/*Row for work experience header title*/}
            <Row>
              <Appear className="HeaderTransition">
                <h3 id="Experiences-Header">
                  Work Experience
                </h3>
              </Appear>
            </Row>

            {/*Work Experience component that holds all my information*/}
            <WorkExperience />

            {/*TODO: Project list will be a component of its own*/}

          </Grid>
        </div>
    );
  }
}
