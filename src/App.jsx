import React, { useEffect, useState } from 'react';
import { CardGroup, Form, FormControl, Navbar } from 'react-bootstrap';
import { PlayCircle } from 'react-feather';

import './App.css';
import Movie from './Movie';

function App() {    
  const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="; 

  const [results, setResults] = useState();  
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const handleChange = (e) => setSearchVal(e.target.value);

  const getMovies = async (url) => {
      const resp = await fetch(url);
      const respData = await resp.json(); 
      setResults(respData.results);
      setIsLoaded(true);
  }
  useEffect(() => {
    getMovies(APIURL);
 }, []);

  let movies = null;
  if (isLoaded) {
    movies = results.map((movie) => (
      <Movie 
        key={movie.id}
        poster_path={movie.poster_path} 
        vote_average={movie.vote_average}
        overview={movie.overview}>
      </Movie>
    ));
  }

  const searchSubmit = (e) => {    
    e.preventDefault();
    console.log("searchSubmit");
    console.log(searchVal);
    if (searchVal.trim()) {
        getMovies(SEARCHAPI + searchVal);  
        setSearchVal('');
    }
  }

  return (
    <span className='main-body'>
      <Navbar className='header'>
        <span className="title">
          <PlayCircle className="play-icon"/>
          <Navbar.Brand className="title-text">watchlist</Navbar.Brand>
        </span>
        <Form className="d-flex" onSubmit={searchSubmit}>
          <FormControl
            placeholder="search"
            className="search"
            defaultValue={searchVal}
            onChange={handleChange}
          />
        </Form>    
      </Navbar>
      <CardGroup className='card-group'>
        {movies}
      </CardGroup>
    </span>
  );
};

export default App;
