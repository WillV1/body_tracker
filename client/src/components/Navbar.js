import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Navigation = ({auth: { isAuthenticated, loading}, logout }) => {

  const authLinks = (
    <Nav className="ml-auto">
    <Nav.Link href="/chart">BMI Chart</Nav.Link>
    <Nav.Link href="/check-in">Weight Check In</Nav.Link>
    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Link onClick={logout} to="/"><Button variant="light">Logout</Button></Link>
    </Nav>
  )

  const guestLinks = (
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  )

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Body Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
    { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </Navbar.Collapse>
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