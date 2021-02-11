import React, {Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import CheckInItem from '../components/CheckInItem';
import { getPosts } from '../actions/post';


const CheckIn = ({ getPosts, post: { posts, loading }}) => {

  useEffect(() => {
    getPosts();
  }, []);

  return loading ? <Spinner /> : (<Fragment>
    <h2>Check-ins</h2>
      {posts.map(post => (
        <CheckInItem key={post._id} post={post} />
      ))}
    </Fragment>)
}

CheckIn.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
})
export default connect(mapStateToProps, { getPosts })(CheckIn);