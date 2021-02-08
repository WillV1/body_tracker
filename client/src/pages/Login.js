import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginData;

  const onChange = e => setLoginData({...loginData, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault();
    console.log('SUCCESS')
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

export default Login;