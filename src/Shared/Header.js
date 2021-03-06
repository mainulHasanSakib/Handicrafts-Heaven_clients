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
      
      <Nav.Link as={Link} to="/allProduct">GiftBOX</Nav.Link>
      
      {user?.email ? <>
        <Nav.Link as={Link} to="/dashboard"><Button  variant="light">DashBoard</Button></Nav.Link>
                            <Button onClick={logout} variant="light">Logout</Button>
                            </> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            
                            
                         
      
    </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};

export default Header;