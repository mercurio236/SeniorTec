import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Logo from './img/LogoNova.png';



function Menu({ history }) {

    return (
        <div>
            <Navbar bg="white" variant="light" style={{ borderRadius: '10px' }}>
                <Navbar.Brand href="/">
                    <img src={Logo} width="150" height="108" />
                </Navbar.Brand>
                <Nav className="menu">
                    <Button variant='outline-dark' id="button" href="/">Home</Button>
                    <Button variant='outline-dark' id="button" href="/servicos">Serviços</Button>
                    <Button variant='outline-dark' id="button" href="/sobre">Sobre</Button>
                    <Button variant='outline-dark' id="button" href="/contato">Contato</Button>
                </Nav>
            </Navbar>

            
        </div>


    )
}

export default Menu;