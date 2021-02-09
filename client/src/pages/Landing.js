import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Landing = ({ isAuthenticated }) => {

  if(isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div>
      <h1>Welcome to Body Tracker</h1>
      <Link to="/register"><Button variant="dark">Sign up</Button></Link>
      <Link to="/login"><Button variant="dark">Log in</Button></Link>
    </div>
    
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);