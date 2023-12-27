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
      const response = await fetch(
        "https://movieapp-b55a3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // let transformedMovies = [];
      // try {
      //   transformedMovies = data.results.map((movieData) => {
      //     return {
      //       id: movieData.episode_id,
      //       title: movieData.title,
      //       openingText: movieData.opening_crawl,
      //       releaseDate: movieData.release_date,
      //     };
      //   });
      // } catch (e) {
      //   setError(e.message);
      // }
      setMovies(loadedMovies);
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no Movies.</p>;


  const deleteMovieHandler = async (id) => {
    console.log(id);
    const response = await fetch(
      `https://movieapp-b55a3-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      })
      fetchMoviesHandler();
    
  }

  if (movies.length > 0) {
    content = <MoviesList movies={movies} deleteMovieHandler={deleteMovieHandler}/>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  const onSubmitHandler = useCallback(
    async (title, openingText, releaseDate) => {
      const newMovieObj = {
        title: title,
        openingText: openingText,
        releaseDate: releaseDate,
      };
      const response = await fetch(
        "https://movieapp-b55a3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(newMovieObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchMoviesHandler();
      
    },
    [fetchMoviesHandler]
  );

  return (
    <React.Fragment>
      <section>
        <AddMovieForm onSubmit={onSubmitHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <br />
        <br />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
