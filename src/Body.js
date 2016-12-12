import Component from 'react/lib/ReactComponent';
import WorkExperience from './WorkExperience';
import PersonalProjects from './PersonalProjects';
import JumboT from './JumboT';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import Appear from 'react-appear';

export default class Body extends Component {
    render() {
        return (
            <div>

                {/* Moved out jumbotron into its own component*/}
              <JumboT />

                {/* The grid container which has the main body */}
              <Grid id="info">
                  {/* Header for about. Should say Good Morning/Evening/Night */}
                <Row>
                  <Appear className="HeaderTransition">
                    <Col xsOffset={1}>
                      <h3 id="About">
                        ME:
                      </h3>
                    </Col>
                  </Appear>
                </Row>

                  {/* About me text */}
                <Row>
                  <Col xs={4} xsOffset={1}>
                    <h4 id="About-Me-Text">
                      Welcome to my site! I am an endeavouring software developer in my fourth year /
                      final semester at UBC.

                      <br />
                      <br />

                      My current expertise generally revolves around
                      back-end systems designed using NoSQL databases, and front-end
                      applications using a combination of HTML, Bootstrap and React.

                      <br />
                      <br />

                      Scroll through some of my experiences, projects and don't be shy about
                      contacting me about any site improvements, bugs or just to have a chat.
                    </h4>
                  </Col>

                    {/* Languages Overview */}
                  <Col xs={6} xsOffset={1} id="Language-Overview">
                    // Java
                    <br />
                    System.out.println("I definitely know this very well!")
                    <br />
                    <br />

                    // Javascript
                    <br />
                    console.log("I know this fairly well!")
                    <br />
                    <br />

                    # Coffeescript
                    <br />
                    console.log "I know this well."
                    <br />
                    <br />

                      {"<!-- HTML -->"}
                    <br />
                    Still learning this, along with SCSS and JSX.
                    <br />
                    <br />
                  </Col>
                </Row>

                  {/* Row for work experience header title */}
                <Row>
                  <Appear className="HeaderTransition">
                    <Col xsOffset={1}>
                      <h3 id="Experiences">
                        WORK:
                      </h3>
                    </Col>
                  </Appear>
                </Row>

                  {/* Work Experience component that holds all my information */}
                <WorkExperience />

                  {/* Header for Personal Projects */}
                <Row>
                  <Appear className="HeaderTransition">
                    <Col xsOffset={1}>
                      <h3 id="Projects">
                        PROJECTS:
                      </h3>
                    </Col>
                  </Appear>
                </Row>

                  {/* Personal Project component will go here*/}
                <PersonalProjects />

                  {/* Resume component will go here*/}
                <Row>
                  <Appear className="HeaderTransition">
                    <Col xsOffset={1}>
                      <h3 id="Resume">
                        LETS TALK:
                      </h3>
                    </Col>
                  </Appear>
                </Row>

                <Row>
                  <Col xs={6} xsOffset={1}>
                    <h4 id="Resume-Text">
                      <p>
                        Want to get in touch? Find my social links in the footer.
                      </p>

                      <br />

                      <p>
                        <i>
                          My résumé has private information in regards to my phone number and address.
                          Contact me directly if you would like a copy, sorry!
                        </i>
                      </p>
                    </h4>
                  </Col>
                </Row>

              </Grid>
            </div>
        );
    }
}
