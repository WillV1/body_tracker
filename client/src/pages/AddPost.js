import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const AddPost = ({addPost}) => {

  const [date, setDate] = useState(new Date());
  const [weight, setWeight] = useState('')
  const [image, setImage] = useState('')

  const handleOnChange = date => {
    setDate(date);
  };


    const onSubmit = async e => {
      e.preventDefault();

      addPost({date, weight, image});

      setDate('')
      setWeight('')
      setImage('')
      
    };

  return (
    <Container>
      <Form onSubmit={e => onSubmit(e)} method="post" encType="multipart/form-data">
        <Form.Group controlId="formGriDate">
          <Form.Label>Date</Form.Label>
          <DatePicker
            selected={date}
            name="dateFrom"
            dateFormat="MM/dd/yyyy"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group controlId="formGridWeight">
          <Form.Label>Current Weight</Form.Label>
          <Form.Control type="number" placeholder="Enter current weight" name="weight" 
          value={weight}
          onChange={e => setWeight(e.target.value)}  />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Example file input" 
          onChange={e => setImage(e.target.files[0])}/>
        </Form.Group>
        <Button variant="dark" type="submit">
          Add Check in
        </Button>
      </Form>
    </Container>
  )
}

AddPost.propTypes = {
addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(AddPost);