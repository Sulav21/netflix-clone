import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "axios";
import { request } from "./helpers/Request";

export const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const netflixOrg = async () => {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      console.log(movie);

      return requests;
    };
    netflixOrg();
  }, []);

  const description = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {description(
            movie?.overview,150
            
          )}
        </h1>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
};
