import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const deleteMovieHandler = (id) => {
    props.deleteMovieHandler(id);
  }
  
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteMovieHandler.bind(null, props.id)}>Delete Movie</button>
    </li>
  );
};

export default Movie;
