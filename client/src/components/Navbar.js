import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Navigation = ({auth: { isAuthenticated, loading}, logout }) => {

  const authLinks = (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Body Tracker</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>
  )

  const guestLinks = (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Body Tracker</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>
  )

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

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navigation);