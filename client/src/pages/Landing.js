import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Body Tracker</h1>
      <Link to="/register"><Button variant="dark">Sign up</Button></Link>
      <Link to="/login"><Button variant="dark">Log in</Button></Link>
    </div>
    
  )
}

export default Landing;