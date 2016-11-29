/**
 * Created by Fay on 2016-10-04.
 */
import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';

export default class PersonalProjects extends React.Component {
    render() {
        return (
            <div>
                {/** HOW TO BLUR EDGES :
                 box-shadow: inset x-length v-length blur-radius spread-radius RGB(R, G, B, opacity)
                 **/}

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
            </div>
        )
    }
}