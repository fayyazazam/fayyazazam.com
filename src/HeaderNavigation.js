import React from 'react';
import Scroll from 'react-scroll';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';

export default class HeaderNavigation extends React.Component {
    scrollTo(name) {
        var scroller = Scroll.scroller;

        scroller.scrollTo(name, {
            duration: 1500,
            delay: 100,
            offset: -50,
            smooth: true
        })
    }

    render() {
        return (
            <Navbar inverse fixedTop id="Header-Nav">
                <NavbarHeader>
                    <NavbarBrand>
                        <a style={{color: '#d9d9d9'}} href="#">FutureLogo.png</a>
                    </NavbarBrand>
                    <NavbarToggle />
                </NavbarHeader>
                <NavbarCollapse>
                    <Nav pullRight>
                        <NavItem onClick={()=>this.scrollTo('About')} href="#">About</NavItem>
                        <NavItem onClick={()=>this.scrollTo('Skills')} href="#">Skills</NavItem>
                        <NavItem onClick={()=>this.scrollTo('Experiences')} href="#">Experiences</NavItem>
                        <NavItem onClick={()=>this.scrollTo('Footer')} href="#">Contact</NavItem>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        );
    }
}