import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Body Tracker</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>
  )
};

export default Navigation;