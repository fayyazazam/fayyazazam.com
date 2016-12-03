import Component from 'react/lib/ReactComponent';
import Scroll from 'react-scroll';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';

export default class HeaderNavigation extends Component {
    scrollTo(name) {
        var scroller = Scroll.scroller;

        scroller.scrollTo(name, {
            duration: 1200,
            delay: 75,
            offset: -50,
            smooth: true
        })
    }

    render() {
        return (
            <Navbar inverse fixedTop id="Header-Nav">
                <NavbarHeader>
                    <NavbarBrand>
                        <a id="Title">FAYYAZ AZAM ¬ DESIGN + DEV</a>
                    </NavbarBrand>
                    <NavbarToggle />
                </NavbarHeader>
                <NavbarCollapse>
                    <Nav pullRight>
                        <NavItem onClick={()=>this.scrollTo('About')} href="#">ABOUT</NavItem>
                        <NavItem onClick={()=>this.scrollTo('Experiences')} href="#">EXP</NavItem>
                        <NavItem onClick={()=>this.scrollTo('Projects')} href="#">PROJ</NavItem>
                        <NavItem onClick={()=>this.scrollTo('Footer')} href="#">CONTACT</NavItem>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        );
    }
}