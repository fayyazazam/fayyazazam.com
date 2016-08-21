import React from 'react';
import Scroll from 'react-scroll';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';

export default class HeaderNavigation extends React.Component {
    //TO-DO: Create one function to take to element
    scrollToBottom() {
        var scroll  = Scroll.animateScroll;
        scroll.scrollToBottom();
     }

     scrollToSkills() {
        var scroller = Scroll.scroller;

        scroller.scrollTo("Skills", {
          duration: 1500,
          delay: 100,
          smooth: true,
        })
     }

     scrollToAbout() {
        var scroller = Scroll.scroller;

        scroller.scrollTo("About", {
          duration: 1500,
          delay: 100,
          smooth: true,
        })
     }
     
     scrollToExperiences() {
        var scroller = Scroll.scroller;

        scroller.scrollTo("Experiences", {
          duration: 1500,
          delay: 100,
          smooth: true,
        })
     }


    render() {
        return (
            <Grid id="Container">
                <Row id="Container-Row">
                    <Col sm={4}>
                        <h1 id="TitleLogo">
                            MyFutureLogo.png
                        </h1>
                    </Col>
                    <Col sm={8}
                         style={{display: 'flex', justifyContent: 'flex-end'}}>
                         <div id="Nav-Buttons">
                            <a href="#" onClick={this.scrollToAbout}>About</a>
                            <a href="#" onClick={this.scrollToSkills}>Skills</a>
                            <a href="#" onClick={this.scrollToExperiences}>Experiences</a>
                            <a href="#" onClick={this.scrollToBottom}>Contact</a>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
