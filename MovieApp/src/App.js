import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const [cancel, setCancel] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");

      if (!response.ok) {
        console.log(response.ok);
        throw new Error("Something went wrong ....Retrying");
      }

      const data = await response.json();
      let transformedMovies = [];
      try {
        transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
      } catch (e) {
        setError(e.message);
      }
      setMovies(transformedMovies);
    } catch (e) {
      setError(e.message);
      if (!cancel) {
        setTimeout(() => fetchMoviesHandler(), 5000);
      }
    }
    setIsLoading(false);
  }

  let content = <p>Found no Movies.</p>;

  const cancelHandler = () => {
    setCancel(true);
    content = <p>Found no Movies.</p>;
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button><br/><br/>
        <button onClick={cancelHandler}>Cancel</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
