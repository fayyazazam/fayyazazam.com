import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export default class HeaderNavigation extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={4}>
            <h1>MyFutureLogo.png</h1>
          </Col>
          <nav class='col-sm-6'>
              <p>About Me</p>
              <p>Skills</p>
              <p>Experiences</p>
              <p>Contact</p>
          </nav>
        </Row>
      </Grid>
    );
  }
}
