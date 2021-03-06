import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../actions/profile';

import Spinner from '../layout/Spinner';
import Actions from '../components/Actions';

import Button from 'react-bootstrap/Button';

const Dashboard = ({getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading}}) => {

  useEffect(() => {
    getCurrentProfile();
  },[]);
  
  return loading && profile === null ? <Spinner /> : <Fragment>
  <h1>Dashboard</h1>
  <p>Welcome {user && user.name }</p>
  { profile !== null ? <Fragment>
    <Actions />
    <Button onClick={() => deleteAccount()} variant="danger">Delete Account</Button>
    </Fragment> : 
    <Fragment><p>Please set up a new profile</p>
    <Link to="/create-profile"><Button variant="dark">Create Profile</Button></Link>
    </Fragment>}
  </Fragment>
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);