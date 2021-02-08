import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../actions/alert';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = registerData;

  const onChange = e => setRegisterData({...registerData, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault();
    if(password != password2) {
      console.log('Passwords do not match')
    } else {
      console.log('SUCCESS')
    }
  }

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" 
          onChange={e => onChange(e)}
          value={name} />
        </Form.Group>
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
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password2" 
          onChange={e => onChange(e)}
          value={password2} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Register
        </Button>
      </Form>

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </Container>
    
  )
}

export default connect()(Register);