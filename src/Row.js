import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "axios";

export const Row = ({ title, fetchUrl, isLargeRow=false }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchMovies = async () => {
      const requests = await axios.get(fetchUrl);
      setMovies(requests.data.results);
      console.log(movies);
      return requests;
    };
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={
                  baseURL+`${isLargeRow ? movie.poster_path : movie.backdrop_path}`
                }
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};
