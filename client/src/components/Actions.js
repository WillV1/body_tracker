import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Actions = () => {
  return (
    <div>
      <Link to="/edit-profile"><Button variant="dark">Edit Profile</Button></Link>
    </div>
  )
}

export default Actions;