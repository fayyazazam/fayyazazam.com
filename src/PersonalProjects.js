/**
 * Created by Fay on 2016-10-04.
 */
import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default class PersonalProjects extends React.Component {
    render() {
        return (
            <div>
                <Col xs={10} xsOffset={1}>
                    <div id="Website">
                        <Row id="Website-Row">
                            web row
                        </Row>
                    </div>
                </Col>


                <Col xs={10} xsOffset={1}>
                    <div id="Android-Game">
                        <Row id="Android-Game-Row">
                            android game row
                        </Row>
                    </div>
                </Col>



                <Col xs={10} xsOffset={1}>
                    <div id="Votefinder">
                        <Row id="Votefinder-Row">
                            votefinder row
                        </Row>
                    </div>
                </Col>


                <Col xs={10} xsOffset={1}>
                    <div id="Web-Game">
                        <Row id="Web-Game-Row">
                            web game row
                        </Row>
                    </div>
                </Col>
            </div>
        )
    }

}