import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Modal, Navbar } from 'react-bootstrap';
import { PlayCircle, Search } from 'react-feather';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import Months from './Months';

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
    if (searchVal.trim()) {
        getMovies(SEARCHAPI + searchVal);  
        setSearchVal('');
    }
  }

  return (
    <span className='main-body'>
      <Navbar className='header'>
        <span className="title">
          <PlayCircle className="icon"/>
          <span className="title-text">watchlist</span>
        </span>
        <span className="d-flex align-items-center">
          <Form className='search' onSubmit={searchSubmit}>
            <FormControl
              className='search-bar'
              defaultValue={searchVal}
              onChange={handleChange}
            />
            <Button className="icon" onClick={searchSubmit}>
              <Search />
            </Button>
          </Form>
        </span>
      </Navbar>
      <Months movies={movies} />
    </span>
  );
};

export default App;
