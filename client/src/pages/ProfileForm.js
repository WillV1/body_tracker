import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const ProfileForm = () => {

  const [profileData, setProfileData ] = useState({
    gender: '',
    goalWeight: '',
    startingWeight: '',
    height: '',
    bio: ''
  });

  const { gender, goalWeight, startingWeight, height, bio } = profileData;

  const onChange = e => setProfileData({...profileData, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault();
  }

  return (
    <Container>
      <h2>Create Profile</h2>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" placeholder="Enter gender" name="gender" 
          onChange={e => onChange(e)}
          value={gender} />
        </Form.Group>
        <Form.Group controlId="formGridGoalWeight">
          <Form.Label>Goal Weight (in pounds)</Form.Label>
          <Form.Control type="number" placeholder="Enter goal weight" name="goalWeight" 
          onChange={e => onChange(e)}
          value={goalWeight} />
        </Form.Group>
        <Form.Group controlId="formGridStartingWeight">
          <Form.Label>Starting Weight (in pounds)</Form.Label>
          <Form.Control type="number" placeholder="Enter starting weight" name="startingWeight" 
          onChange={e => onChange(e)}
          value={startingWeight} />
        </Form.Group>
        <Form.Group controlId="formGridSHeight">
          <Form.Label>Height (in inches)</Form.Label>
          <Form.Control type="number" placeholder="Enter height" name="height" 
          onChange={e => onChange(e)}
          value={height} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bio</Form.Label>
          <Form.Control as="textarea" rows={5} name="bio" 
          onChange={e => onChange(e)}
          value={bio}/>
        </Form.Group>
        <Button variant="dark" type="submit">
          Create Profile
        </Button>
      </Form>
    </Container>
  )
}

ProfileForm.propTypes = {

}

export default connect()(ProfileForm);