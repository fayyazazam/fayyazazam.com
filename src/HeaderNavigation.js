import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

export default class HeaderNavigation extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={4}>
                        <h1>
                            MyFutureLogo.png
                        </h1>
                    </Col>
                    <Col sm={8}
                         style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p>About Me</p>
                        <p>Skills</p>
                        <p>Experiences</p>
                        <p>Contact</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
