import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
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
        setTimeout(() => fetchMoviesHandler(), 5000);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])

  let content = <p>Found no Movies.</p>;


  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  const onSubmitHandler = (title, openingText, releaseDate) => {
    const newMovieObj = {
      id: Math.random().toString(),
      title: title,
      openingText: openingText,
      releaseDate: releaseDate
    }
    setMovies(prevState => [newMovieObj, ...prevState]);
    console.log(newMovieObj);
  };

  return (
    <React.Fragment>
      <section>
      <AddMovieForm onSubmit={onSubmitHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button><br/><br/>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
