import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, DELETE_ACCOUNT } from './types';

//Get current profile
export const getCurrentProfile = () => async dispatch => {

  try {
    const res = await axios.get('/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch(err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
};



//Create / update profile

export const createProfile = (formData, history, edit = false) => async dispatch => {

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/profile', formData, config)

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', 'success'));

    if(!edit){
      history.push('/dashboard')
    }

  } catch (err) {

    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete account and profile
export const deleteAccount = () => async dispatch => {

  if(window.confirm('Are you sure? This cannot be undone!')) {
    try {
      const res = await axios.delete(`/profile`);
  
      dispatch({type: CLEAR_PROFILE});
      dispatch({type: DELETE_ACCOUNT});

      dispatch(setAlert('Your account has been deleted'))
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status}
      });
    }
  }
};