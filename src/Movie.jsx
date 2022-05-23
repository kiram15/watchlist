import React, { useState }from "react";
import { Card } from 'react-bootstrap';
import { Rating } from "react-simple-star-rating";

import './App.css';

const Movie = ({ title, poster_path, overview }) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const [rating, setRating] = useState(0) // initial rating value

  const handleRating = (rate) => {
    if (rating) {
      setRating(0);
    }
    else { 
      setRating(rate)
    }
  }

  return (
    <Card className='movie'>
      <Card.Img variant="top" src={IMGPATH + poster_path} alt={title}/>
      <Card.Body>
        <div className='mt-4'>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            size={20}
            label
            fillColor='yellow'
            emptyColor='gray'
            className='rating' 
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Movie;

