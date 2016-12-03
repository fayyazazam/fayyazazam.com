/**
 * Created by Fay on 2016-10-04.
 */
import Component from 'react/lib/ReactComponent';
import Col from 'react-bootstrap/lib/Col';

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
                                <div id="WebsiteText">
                                    <p>Image description</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={5}>
                        <div id="divForPadding">
                            <div id="Img-Overlay">
                                <Image src="./src/styles/images/personalprojects/VoteFinderDemo.jpg" alt =""
                                       id="ThumbRight" responsive/>
                                <div id="WebsiteText">
                                    <p>Image description</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={5} xsOffset={1}>
                        <div id="divForPadding">
                            <div id="Img-Overlay">
                                <Image src="./src/styles/images/personalprojects/CarGameDemo.jpg" alt =""
                                       id="ThumbLeft" responsive/>
                                <div id="WebsiteText">
                                    <p>Image description</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col xs={5}>
                        <div id="divForPadding">
                            <div id="Img-Overlay">
                                <Image src="http://placehold.it/400x300" alt =""
                                       id="ThumbRight" responsive/>
                                <div id="WebsiteText">
                                    <p>Image description</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}