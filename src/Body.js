import React from 'react';
import WorkExperience from './WorkExperience';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Appear from 'react-appear';


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

          {/* Jumbotron and text on it */}
          <Jumbotron>
            <Grid>
              <h2>
                Good {this.getTimeofDay()}!
              </h2>
            </Grid>
          </Jumbotron>

          {/* The grid container which has the main body */}
          <Grid id="info">
            {/* Header for about. Should say Good Morning/Evening/Night */}
            <Row>
              <Appear className="HeaderTransition">
                <h3 id="About">
                  Who am I?
                </h3>
              </Appear>
            </Row>

            {/* About me text */}
            <Row>
              <Col xs={5}>
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

              {/* Languages Overview */}
              <Col xs={5} xsOffset={1} id="Language-Overview">
                // Java
                <br />
                System.out.println("I definitely know this very well!")
                <br />
                <br />

                // Javascript
                <br />
                console.log("I know this fairly well!")
                <br />
                <br />

                # Coffeescript
                <br />
                console.log "I know this well."
                <br />
                <br />

                {"<!-- HTML -->"}
                <br />
                Still learning this, along with CSS and JSX.
                <br />
                <br />
              </Col>
            </Row>

            {/* Row for work experience header title */}
            <Row>
              <Appear className="HeaderTransition">
                <h3 id="Experiences">
                  Where have I worked?
                </h3>
              </Appear>
            </Row>

            {/* Work Experience component that holds all my information */}
            <WorkExperience />

            {/* TODO: Project list will be a component of its own */}
            <Row>
              <Appear className="HeaderTransition">
                <h3 id="Projects">
                  What have I done?
                </h3>
              </Appear>
            </Row>
          </Grid>
        </div>
    );
  }
}
