import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class Footer extends React.Component {
    render() {
        return (
            <Navbar inverse id="Footer">
                <Nav pullRight id="Social-Links">
                    <NavItem href="mailto:fayyazazam@gmail.com">
                        <i id="Mail-Icon" className="fa fa-envelope"></i></NavItem>
                    <NavItem href="https://github.com/fayyazazam/fayyazazam.github.io">
                        <i id="Github-Icon" className="fa fa-github-square"></i></NavItem>
                    <NavItem href="https://www.linkedin.com/in/7ayyaz">
                        <i id="Linkedin-Icon" className="fa fa-linkedin-square"></i></NavItem>
                    <NavItem href="https://twitter.com/F7YY_">
                        <i id="Twitter-Icon" className="fa fa-twitter-square"></i></NavItem>
                    <NavItem href="https://www.facebook.com/FayyazAzam7">
                        <i id="Facebook-Icon" className="fa fa-facebook-square"></i></NavItem>
                </Nav>
            </Navbar>
        );
    }
}