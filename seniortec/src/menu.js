import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Logo from './img/LogoNova.png';
import Footer from '../src/footer'



function Menu({ history }) {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" style={{ borderRadius: '10px' }}>
                <Navbar.Brand href="/">
                    <img src={Logo} width="110" height="80" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="menu" >
                        <Nav.Link href="/" id="button">Home</Nav.Link>
                        <Nav.Link id="button" href="/servicos">Serviços</Nav.Link>
                        <Nav.Link id="button" href="/sobre">Sobre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            
        </div>

        
    )
}

export default Menu;