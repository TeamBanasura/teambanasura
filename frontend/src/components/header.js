import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const header = () => {
  return (
    <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand>Team Banasura</Navbar.Brand>
                <Navbar.Toggle area-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cabs'>
                            <Nav.Link>Cabs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/user/login'>
                            <Nav.Link>Log In</Nav.Link>
                        </LinkContainer>
                        
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    </header>
  )
}

export default header