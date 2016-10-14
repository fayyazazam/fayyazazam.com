/**
 * Created by Fay on 2016-09-22.
 */
import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default class WorkExperience extends React.Component {
    render() {
        return (
            <div>
                {/* Experience # 1 */}
                <Row>
                    <Col xs={6}>
                        <h4 id="Company">
                            Mojio
                        </h4>
                        <h5 id="Company-Position">
                            - Software Developer
                        </h5>
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
                    <Col xs={6} xsOffset={6}>
                        <h4 id="Company">
                            ABB
                        </h4>
                        <h5 id="Company-Position">
                            - Software Developer
                        </h5>
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
                    <Col xs={6}>
                        <h4 id="Company">
                            Global Relay
                        </h4>
                        <h5 id="Company-Position">
                            - QA Analyst
                        </h5>
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