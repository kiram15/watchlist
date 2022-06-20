import React, { useState } from "react";
import { Alert, Box, Button, Form, Modal } from 'react-bootstrap';
import { Rating } from "react-simple-star-rating";

import './App.css';

const MovieModal = ({ show, handleClose }) => {

  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    if (rating) {
      setRating(0);
    }
    else { 
      setRating(rate)
    }
  }

  return (
    <Modal size="lg" className="my-modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={20}
              label
              fillColor='yellow'
              emptyColor='gray'
              className='rating' 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button>Jan</Button>
          <Button>Feb</Button>
          <Button>Mar</Button>
          <Button>Apr</Button>
          <Button>May</Button>
          <Button>June</Button>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default MovieModal;