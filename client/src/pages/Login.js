import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Login = ({ login, isAuthenticated }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const onChange = e => setLoginData({...loginData, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  }

  //Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" 
          onChange={e => onChange(e)}
          value={email} />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" 
          onChange={e => onChange(e)}
          value={password} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>

      <p>Do not have an account? <Link to="/register">Register here</Link></p>
    </Container>
    
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated :state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);