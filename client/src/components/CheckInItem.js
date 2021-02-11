import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../actions/post';

const CheckInItem = ({ deletePost, auth, post: { _id, date, weight, image}}) => {
  return (
    <div>
      <h4>Post Date: <Moment format='YYYY/MM/DD'>{date}</Moment></h4>
      <img src={image} />
      <h6>{weight}</h6>
      <Button onClick={e => deletePost(_id)} variant="danger">Delete Post</Button>
    </div>
  )
}

CheckInItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { deletePost })(CheckInItem);