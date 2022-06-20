import React, { useEffect, useState } from "react";
import { Card, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Rating } from "react-simple-star-rating";

import './App.css';
import MovieModal from './MovieModal';

const Movie = ({ title, poster_path }) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    console.log("helloooo")
    setShow(true);
  }
  const handleClose = () => {
    console.log("here???")
    setShow(false);
  }


  const handleRating = (rate) => {
    if (rating) {
      setRating(0);
    }
    else { 
      setRating(rate)
    }
  }

  useEffect(() => {
    console.log("show ", show);
  }, [show]);

  return (
    <Card className='movie'>
      <Card.Img variant="top" src={IMGPATH + poster_path} alt={title} onClick={handleShow}/>
      <MovieModal show={show} handleClose={handleClose} />)
    </Card>
  );
};

export default Movie;

