/**
 * Created by Fay on 2016-10-04.
 */
import Component from 'react/lib/ReactComponent';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';

export default class PersonalProjects extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={5} xsOffset={1}>
                        <div id="divForPadding">
                            <div id="Img-Overlay">
                                <Image src="./src/styles/images/personalprojects/WebsiteDemo.jpg" alt =""
                                       id="ThumbLeft" responsive/>
                                <div id="ProjectText">
                                    <div id="ProjectTextContainer">
                                        <h5 id="Project-Title">
                                            WEBSITE + PORTFOLIO ¬ REACT:
                                        </h5>

                                        <br />

                                        <p>
                                            Template-less website made from scratch using
                                            React, with a little help from react-boostrap, webpack
                                            and a few notable others.

                                            <br />
                                            <br />

                                            <a href="https://github.com/fayyazazam/fayyazazam.github.io">GITHUB</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={5}>
                        <div id="divForPadding">
                            <div id="Img-Overlay">
                                <Image src="./src/styles/images/personalprojects/VoteFinderDemo.jpg" alt =""
                                       id="ThumbRight" responsive/>
                                <div id="ProjectText">
                                    <div id="ProjectTextContainer">
                                        <h5 id="Project-Title">
                                            VOTEFINDER ¬ WEB APP:
                                        </h5>

                                        <br />

                                        <p>
                                           Web application created using Google's Web Toolkit (GWT) that showcased all the 2014
                                            polling stations in the city of Vancouver.

                                            <br />
                                            <br />

                                            <a href="https://github.com/fayyazazam/votefinder">GITHUB</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={5} xsOffset={1}>
                        <div id="divForPadding">
                            <div id="Img-Overlay">
                                <Image src="./src/styles/images/personalprojects/CarGameDemo.jpg" alt =""
                                       id="ThumbLeft" responsive/>
                                <div id="ProjectText">
                                    <div id="ProjectTextContainer">
                                        <h5 id="Project-Title">
                                            CAR + DRIVER ¬ HTML5 GAME:
                                        </h5>

                                        <br />

                                        <p>
                                            Browser based, vertical-scrolling car game
                                            built using the Phaser HTML5 game framework

                                            <br />
                                            <br />

                                            <a href="https://github.com/fayyazazam/Car_Game">GITHUB</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={5}>
                        <div id="divForPadding">
                            <div id="Img-Overlay">
                                <Image src="./src/styles/images/personalprojects/RobotGameDemo.jpg" alt =""
                                       id="ThumbRight" responsive/>
                                <div id="ProjectText">
                                    <div id="ProjectTextContainer">
                                        <h5 id="Project-Title">
                                            ROBOT ¬ ANDROID GAME:
                                        </h5>

                                        <br />

                                        <p>
                                            Native Android game created using a self-made
                                            framework that included animations, file I/O handlers,
                                            multi-touch handlers and more.

                                            <br />
                                            <br />

                                            <a href="https://github.com/fayyazazam/bot-game">GITHUB</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}