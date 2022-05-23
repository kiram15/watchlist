import React, { useState } from 'react';
import { CardGroup } from 'react-bootstrap';

import './App.css';
import Header from './Header';
import Movie from './Movie';
import Month from './Month';

function App() {    
  const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="; 

  const [results, setResults] = useState();  
  const [isLoaded, setIsLoaded] = useState(false);

  const search = document.getElementById("search"); 

  const getMovies = async (url) => {
      const resp = await fetch(url);
      const respData = await resp.json(); 
      setResults(respData.results);
      setIsLoaded(true);
  } 

  let movies = null;

  if (isLoaded) {
    movies = results.map((movie) => (
      <Movie 
        key={movie.title}
        poster_path={movie.poster_path} 
        vote_average={movie.vote_average}
        overview={movie.overview}>
      </Movie>
    ));
  }

  function handleSubmit(e) {
    e.preventDefault(); 

    const searchTerm = search.value;  

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);  

        search.value = "";
    }
  }

  getMovies(APIURL);  

  return (
    <span className='main-body'>
      <Header></Header>
      <Month></Month>
      <CardGroup className='card-group'>
        {movies}
      </CardGroup>
    </span>
  );
};

export default App;
