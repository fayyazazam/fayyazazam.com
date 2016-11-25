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

                <Col xs={5} xsOffset={1}>
                    <div id="divForPadding">
                        <div id="Img-Overlay">
                            <Image src="http://placehold.it/400x300" alt =""
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

                <Col xs={5} xsOffset={1}>
                    <div id="divForPadding">
                        <div id="Img-Overlay">
                            <Image src="http://placehold.it/400x300" alt =""
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