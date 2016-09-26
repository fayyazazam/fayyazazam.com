/**
 * Created by Fay on 2016-09-22.
 */
import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Appear from 'react-appear';

export default class WorkExperience extends React.Component {
    render() {
        return (
            <div>
                {/* Experience # 1 */}
                <Row>
                    <Col xs={4}>
                        <h4>
                            Experience 1
                        </h4>
                    </Col>
                </Row>

                <Row id="Experiences-Row">
                    {/* Small overview about Experience 1 */}
                    <Col xs={6}>
                        <h5>
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
                            big body of text big body of text
                        </h5>
                    </Col>

                    {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                    <Col xs={6}>

                    </Col>
                </Row>

                {/* Experience # 2 */}
                <Row>
                    <Col xs={4} xsOffset={6}>
                        <h4>
                            Experience 2
                        </h4>
                    </Col>
                </Row>

                <Row id="Experiences-Row">
                    {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                    <Col xs={6}>

                    </Col>

                    {/* Small overview about Experience 2 */}
                    <Col xs={6}>
                        <h5>
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
                            big body of text big body of text
                        </h5>
                    </Col>
                </Row>

                {/* Experience # 3 */}
                <Row>
                    <Col xs={4}>
                        <h4>
                            Experience 3
                        </h4>
                    </Col>
                </Row>

                <Row id="Experiences-Row">
                    {/* Small overview about Experience 3 */}
                    <Col xs={6}>
                        <h5>
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
                            big body of text big body of text
                        </h5>
                    </Col>

                    {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                    <Col xs={6}>

                    </Col>
                </Row>
            </div>
        );
    }
}