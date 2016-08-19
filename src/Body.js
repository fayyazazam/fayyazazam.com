import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Body extends React.Component {
  render() {
    return (
        <div>
          <Jumbotron>
            <Grid>
              <h2>Site is under construction!</h2>
            </Grid>
          </Jumbotron>
          <div>
            <h3 id="About">Good morning</h3>
            <p>Long paragraph</p>
            <h3 id="Skills">Skills</h3>
            <p>Table format</p>
            <h3 id="Experiences">Experiences</h3>
            <p>Paragraph (image)</p>
          </div>
        </div>
    );
  }
}
