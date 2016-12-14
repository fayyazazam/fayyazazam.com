/**
 * Created by Fay on 2016-09-22.
 */
import Component from 'react/lib/ReactComponent';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

export default class WorkExperience extends Component {
    render() {
        return (
            <div>
                {/* Experience # 1 */}
                {/* This div to properly fit the logo in the background */}
                <div id="Mojio-Experience">
                    <Row>
                        <Col xs={5} xsOffset={1} id="Company-Title">
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
                        <Col xs={5} xsOffset={1}>
                            <h5 id="Experience-Body">
                                Improved the API automation (including vehicle and device simulation)
                                project to almost 95% coverage, along with an automated report generator.
                                This project was later incorporated into a load-test tool to better
                                measure server capabilities.
                                <br />
                                <br />
                                Worked with ZTE and managed all device processes
                                from change-logs, to server implementations, to over the air updates, to testing
                                and even customer support.
                            </h5>
                        </Col>

                        {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                        <Col xs={5}>
                            <Row id="Language-Row">
                                <Button id="Language-Button" disabled="false"
                                        bsSize="small">.coffee</Button>
                                <Button id="Language-Button" disabled="false"
                                        bsSize="small">.java</Button>
                            </Row>
                            <Row id="Framework-Row">
                                <Button id="Framework-Button" disabled="false"
                                        bsSize="small">Mocha</Button>
                                <Button id="Framework-Button" disabled="false"
                                        bsSize="small">Elasticsearch</Button>
                            </Row>
                        </Col>
                    </Row>
                </div>

                {/* Experience # 2 */}
                <div id="ABB-Experience">
                    <Row>
                        <Col xs={5} xsOffset={6} id="Company-Title">
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
                        <Col xs={5} xsOffset={1}>
                            <Row id="Language-Row-Left">
                                <Button id="Language-Button-Left" disabled="false"
                                        bsSize="small">.java</Button>
                                <Button id="Language-Button-Left" disabled="false"
                                        bsSize="small">.js</Button>
                            </Row>
                            <Row id="Framework-Row-Left">
                                <Button id="Framework-Button-Left" disabled="false"
                                        bsSize="small">Cordova</Button>
                                <Button id="Framework-Button-Left" disabled="false"
                                        bsSize="small">Appium</Button>
                                <Button id="Framework-Button-Left" disabled="false"
                                        bsSize="small">Elasticsearch</Button>
                            </Row>
                        </Col>

                        {/* Small overview about Experience 2 */}
                        <Col xs={5}>
                            <h5 id="Experience-Body">
                                Re-designed the Cordova based mobile application and created a
                                theming engine.
                                <br />
                                <br />
                                Kick-started the automation team with the initial implementation of
                                Appium for said mobile application.
                                <br />
                                <br />
                                Engineered a prototype Elasticsearch client that synchronized app-specific
                                data from their Oracle database to optimize fetching speeds and user experience.
                            </h5>
                        </Col>
                    </Row>
                </div>

                {/* Experience # 3 */}
                <div id="GR-Experience">
                    <Row>
                        <Col xs={5} xsOffset={1} id="Company-Title">
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
                        <Col xs={5} xsOffset={1}>
                            <h5 id="Experience-Body">
                                Followed OWASP standards to test security compliance and discovered
                                critical cross-site scripting vulnerabilities.
                                <br />
                                <br />
                                Created test plans and regression suites aligned with new features
                                while addressing security standards to make sure they are covered in future releases.
                            </h5>
                        </Col>

                        {/* Picture/Icon of company + Icons of tools/languages I learnt from here */}
                        <Col xs={5}>
                            <Row id="Language-Row">
                                <Button id="Language-Button" disabled="false"
                                        bsSize="small">.html</Button>
                            </Row>
                            <Row id="Framework-Row">
                                <Button id="Framework-Button" disabled="false"
                                        bsSize="small">JMeter</Button>
                                <Button id="Framework-Button" disabled="false"
                                        bsSize="small">XSS Security</Button>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}