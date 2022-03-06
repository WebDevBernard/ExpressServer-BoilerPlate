import "../App.css";
import { useState, useEffect } from "react";
// fetch with custom hook react
function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
  }
  return [movies];

  // async function fetchMoviesHandler() {
  //     fetch("https://swapi.dev/api/films")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const transformedMovies = data.results.map((movieData) => {
  //           return {
  //             id: movieData.episode_id,
  //             title: movieData.title,
  //             openingText: movieData,
  //             releaseDate: movieData.releaseDate.release_date,
  //           };
  //         });
  //         setMovies(transformedMovies);
  //       });
  //   }
  // };
}

export default function Movies() {
  const [movies] = useFetchMovies();
  return (
    <div className="box">
      <p className="p">Fetch Star Wars API</p>
      <table className="table">
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Description</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.openingText}</td>
                <td>{movie.releaseDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
