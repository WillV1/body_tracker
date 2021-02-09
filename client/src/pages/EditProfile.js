import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../actions/profile';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const EditProfile = ({ profile: {profile, loading}, createProfile, getCurrentProfile, history }) => {

  const [profileData, setProfileData ] = useState({
    gender: '',
    goalWeight: '',
    startingWeight: '',
    height: '',
    bio: ''
  });

  useEffect(() => {
    getCurrentProfile();

    setProfileData({
      gender: loading || !profile.gender ? '' : profile.gender,
      goalWeight: loading || !profile.goalWeight ? '' : profile.goalWeight,
      startingWeight: loading || !profile.startingWeight ? '' : profile.startingWeight,
      height: loading || !profile.height ? '' : profile.height,
      bio: loading || !profile.bio ? '' : profile.bio,
    });
  }, [loading]);

  const { gender, goalWeight, startingWeight, height, bio } = profileData;

  const onChange = e => setProfileData({...profileData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault();
    createProfile(profileData, history, true)
  }

  return (
    <Container>
      <h2>Create Profile</h2>
      <Form onSubmit={e => onSubmit(e)}>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" name="gender" onChange={e => onChange(e)} value={gender}>
          <option value="0">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
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
          Update Profile
        </Button>
        <Link to="/dashboard"><Button variant="light">Go Back</Button></Link>
      </Form>
    </Container>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})


export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));