import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const AddPost = ({addPost}) => {

  const [date, setDate] = useState('')
  const [weight, setWeight] = useState('')
  const [image, setImage] = useState('')

  const { date, weight, image } = postData;


    const onSubmit = async e => {
      e.preventDefault();

      addPost({date, weight, image});

      setDate('')
      setWeight('')
      setImage('')
      
    };

  return (
    <Container>
      <h2>Check in!</h2>
      <Form onSubmit={e => onSubmit(e)} method="post" encType="multipart/form-data">
        <Form.Group controlId="formGridName1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" 
          onChange={e => onChange(e)}
          value={name} />
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
  //   <div>
  //     <h3 className="center-align">Add Recipient</h3>
  //     <div className="row">
  //   <form className="col s6" onSubmit={e => onSubmit(e)} method="post" encType="multipart/form-data">
  //     <div className="row">
  //     <div className="input-field col s6 offset-s10">
  //       <input id="name" type="text" value={name}
  //       onChange={e => setName(e.target.value)}
  //       className="validate" required/>
  //       <label htmlFor="name">Name</label>
  //     </div>
  //     </div>
  //     <div className="row">
  //       <div className="input-field col s6 offset-s10">
  //         <input id="relationship" type="text" value={relationship}
  //         onChange={e => setRelationship(e.target.value)} 
  //         className="validate" required/>
  //         <label htmlFor="relationship">Relationship</label>
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="input-field col s6 offset-s10">
  //         <input id="budget" type="number" value={budget}
  //         onChange={e => setBudget(e.target.value)}
  //         className="validate" required/>
  //         <label htmlFor="budget">Budget</label>
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="file-field input-field  col s6 offset-s10">
  //         <div className="btn">
  //           <span>File</span>
  //           <input type="file" onChange={e => setImage(e.target.files[0])}/>
  //         </div>
  //         <div className="file-path-wrapper">
  //           <input className="file-path validate" type="text" />
  //         </div>
  //       </div>
  //     </div>
  //     <div className="col s6 offset-s10">
  //       <button className="btn waves-effect waves-light" type="submit" name="action">Submit
  //       </button>
  //     </div>
  //   </form>
  // </div>
  //   </div>
  )
}

AddPost.propTypes = {
addPost: PropTypes.func.isRequired
}

export default connect(null, {addPost})(AddPost);