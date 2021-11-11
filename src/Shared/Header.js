import React from 'react';
import { Container, Nav, Navbar ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
   const { user, logout } = useAuth();
    return (
        <>
<Navbar bg="danger" variant="dark" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand expand="lg" href="#home" >HandiCrafts Heaven</Navbar.Brand >
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="ms-auto">
      <Nav.Link as={ HashLink } to="/home#home">Home </Nav.Link>
      <Nav.Link as={ HashLink } to="/home#about">About </Nav.Link>
      
      
      
      {user?.email ?
                            <Button onClick={logout} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            
                            
                        <Navbar.Text>
                            Hello <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
      
    </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};

export default Header;