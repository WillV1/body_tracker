import axios from 'axios';
import { setAlert } from './alert';
import { DELETE_POST, ADD_POST, GET_POSTS, POST_ERROR} from './types';

//GET posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/post');

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//DELETE post
export const deletePost = id => async dispatch => {
  try {

    await axios.delete(`/post/${id}`)
    dispatch({
      type: DELETE_POST,
      payload: id
    })

      dispatch(setAlert('Post Removed', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
};

//ADD post
export const addPost = formData => async dispatch => {

  const { date, weight, image } = formData;

  const data = new FormData();
  data.append('date', date);
  data.append('image', image);
  data.append('weight', weight);

  const config = {
    headers: { 
      'Content-Type': 'multipart/form-data'
    }
  }
  
  try {
    const res = await axios.post(`/post`, data, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    })
    dispatch(setAlert('Post Added', 'success'));

  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
};