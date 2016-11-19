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
                {/**
                 Create a gallery of four images in a grid.
                 Make it sort of dark / dim
                 Have white space bwtween the pics (maybe)
                 On hover, dim it then transition in text
                 overlay.

                 on the text describe what it is/ short blip about it
                 Link it to your github code.
                 at the buttom put down frameworks you used.
                 **/}


                {/** HOW TO BLUR EDGES :
                 box-shadow: inset x-length v-length blur-radius spread-radius RGB(R, G, B, opacity)
                 **/}

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