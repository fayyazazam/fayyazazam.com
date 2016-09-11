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
                    <NavItem href="#"><i id="Github-Icon" className="fa fa-github-square"></i></NavItem>
                    <NavItem href="#"><i id="Facebook-Icon" className="fa fa-facebook-square"></i></NavItem>
                    <NavItem href="#"><i id="Linkedin-Icon" className="fa fa-linkedin-square"></i></NavItem>
                    <NavItem href="#"><i id="Twitter-Icon" className="fa fa-twitter-square"></i></NavItem>
                </Nav>
            </Navbar>
        );
    }
}