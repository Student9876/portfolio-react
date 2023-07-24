import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <div id="navbarDiv">
        <Navbar bg='dark' variant='dark' expand='md'>
            <Container>
                <Navbar.Brand href='/'>EN_ZEON</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='justify-content-end' style={{width:'100%'}}>
                        <NavLink href='/'>Home</NavLink>
                        <NavLink href='#about'>About</NavLink>
                        <NavLink href='#contactme'>Contact Me</NavLink>

                        <NavDropdown bg='dark' variant='dark' title='Project' id='basic-nav-dropdown'>
                            <Dropdown.Item href='/weatherapp'>Weather-App</Dropdown.Item>
                            <Dropdown.Item href='#action-1'>Keeper-App</Dropdown.Item>
                            <Dropdown.Item href='#action-1'>To-do List-App</Dropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )

}
export default NavbarComponent;